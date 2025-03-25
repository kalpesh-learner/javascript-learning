'use strict';

const greet = greeting => name => console.log(`${greeting} ${name}`)

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function () {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
}

lufthansa.book(239, 'Kalpesh Khandagale');
lufthansa.book(635, 'Kajal Khandagale');


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book;

// Dose NOT work
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 244, 'Pradeep Kadam');
console.log(lufthansa);

const airIndia = {
    airline: 'Air India',
    iataCode: 'AI',
    bookings: []
}

book.call(airIndia, 12, 'Kalpana Khandagale');


// Apply method
const flightData = [233, 'Harshala Kuveskar'];
book.apply(airIndia, flightData);

book.call(airIndia, ...flightData);
console.log(airIndia);

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Trasnformed string: ${fn(str)}`);

//     console.log(`Trasnformed by: ${fn.name}`);
// }

// transformer('Satara is far away from the mumbai', upperFirstWord);
// transformer('Satara is far away from the mumbai', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//     console.log('✋');
// }

// document.body.addEventListener('click', high5);
// ['Kalpesh', 'Maratha', 'Adam'].forEach(high5);

// const flight = 'LH234';
// const kalpesh = {
//     name: 'Kalpesh Khandagale',
//     passport: 234123451234
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name; 

//     if(passenger.passport === 234123451234) {
//         alert('Checked in');
//     } else {
//         alert('Wrong passport');
//     }
// }

// checkIn(flight, kalpesh);
// console.log(flight);
// console.log(kalpesh);


// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);
//     console.log(person.passport);
// }

// newPassport(kalpesh);
// checkIn(flight, kalpesh);

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, pirce = 199 * numPassengers) {

//     // ES5
//     // numPassengers = numPassengers || 1;
//     // pirce = pirce || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         pirce
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);
