'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//we can alwaysb set up default values
// Data needed for first part of the section

const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
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
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // because of the new es6 bfeatures .. we are now allowed to write our
  //methids like this

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered tp ${address} at ${time}`);
  },
};

// this is also anoher es6 feature..
// imagine the openhours object was removed from the general object.. and it existed outside
// but you sill wanted it as a property inside .. what would you do
//instead of writing openinghours = openonghours
// you can just write openinghours = openinghours
// with these es6 features we can compute compute property name sinstead of writing them manually
