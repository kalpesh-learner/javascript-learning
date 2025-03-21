'use strict';

const flight = 'LH234';
const kalpesh = {
    name: 'Kalpesh Khandagale',
    passport: 234123451234
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name; 

    if(passenger.passport === 234123451234) {
        alert('Checked in');
    } else {
        alert('Wrong passport');
    }
}

checkIn(flight, kalpesh);
console.log(flight);
console.log(kalpesh);


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
    console.log(person.passport);
}

newPassport(kalpesh);
checkIn(flight, kalpesh);

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
