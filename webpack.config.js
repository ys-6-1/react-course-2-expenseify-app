const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if(process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'proess.env.FIREBASE_API_KEY': JSON.stringify(proess.env.FIREBASE_API_KEY),
        'proess.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(proess.env.FIREBASE_AUTH_DOMAIN),
        'proess.env.FIREBASE_DATABASE_URL': JSON.stringify(proess.env.FIREBASE_DATABASE_URL),
        'proess.env.FIREBASE_PROJECT_ID': JSON.stringify(proess.env.FIREBASE_PROJECT_ID),
        'proess.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(proess.env.FIREBASE_STORAGE_BUCKET),
        'proess.env.FIREBASE_MESSAGING_SENDER': JSON.stringify(proess.env.FIREBASE_MESSAGING_SENDER),
        'proess.env.FIREBASE_APP_ID': JSON.stringify(proess.env.FIREBASE_APP_ID),
        'proess.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(proess.env.FIREBASE_MEASUREMENT_ID)
      })
    ],
    devtool:  isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};