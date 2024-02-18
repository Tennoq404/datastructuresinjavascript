'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//we can alwaysb set up default values
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered tp ${address} at ${time}`);
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole 21',
  mainIndex: 2,
  staterIndex: 2,
});
// lets say e wanted to loop over the entire menu

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}
// whenusing a normal loop we would hav eto go through the strees of setting up a counter
// and foolow the necessary conditions
// the for-of loop  suggest an easier way

for (const item of menu) console.log(item);
// the oitem stands for the a variable that stores the current values of the array

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] in menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// this is achieved by destructuring for every iteration .. variable swould be stored
// in i and el
