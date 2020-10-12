// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name: firstName ='Anoymous', age } = person;

// console.log(`${name} is ${age}`);


// const { city, temp: temperature } = person.location
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan HOliday',
//     publisher: { 
//         //name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher

// if(publisherName){
//     console.log(publisherName);
// }

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , mPrice] = item;
console.log(`A medium ${drink} costs ${mPrice}.`)
