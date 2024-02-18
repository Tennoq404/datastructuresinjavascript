'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//we can alwaysb set up default values
// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered tp ${address} at ${time}`);
  },
};
// for looping through the keys or property names on an object
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
const properties = Object.keys(openingHours);
console.log(properties);
let openstr = `we are open on ${properties.length} days: `;

for (const day of properties) {
  openstr += ` ${day}, `;
}
console.log(openstr);

// what if we wanted only the values of the objects

const values = Object.values(openingHours);
console.log(values);

// if we wanted to loop through the whole object as a whole
// remember enteries? theta calls the array value and its index
// we can use it for an object too but it works differently on objects

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close ${close}`);
}

