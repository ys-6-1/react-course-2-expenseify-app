import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses)
//     });



// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 1256.03,
//     createdAt: 987123897987
// });

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// });

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// })

// database.ref('notes/-MJjed9mvG2ak4QNhgnE').update({
//     body: 'Buy food'
// })

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(() => {
//         console.log('Error fetching data', e);
//     });



//   database.ref().set({
//     name: 'Anoymous',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//     console.log('This failed.', e);
//   });


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// })
//     .then(() => {
//         console.log('Data updated');
//     })
//     .catch((e) => {
//         console.log('Update failed:', e);
    // });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data successfully removed');
//     })
//     .catch((e) => {
//         console.log('Error:', e)
//     });