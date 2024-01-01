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
    console.log(`Order received ${this.starterMenu [starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered tp ${address} at ${time}`);
  },
};
restaurant.orderDelivery({
  time : '22:30',
  address : 'Via del sole 21',
  mainIndex : 2,
  staterIndex : 2,
});



const { name, openingHours, categories } = restaurant;
console.log(name);
console.log(name, openingHours, categories);

const {
  name: restaurantname,
  openingHours: hours,
  categories: tags,
} = restaurant;
/* you can grad data and give it a new variable with the colon feature
just grab the original name, give a colon and put your intended name for it
*/
const { menu = [], starterMenu: starters = [] } = restaurant;
//thi staneds as a default vgalue
console.log(menu, starters);
//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
//we want to create two variables open and close and these should contain
// the open and close value for friday

//const { open, close } = restaurant.openingHours.fri;
//console.log(open, close);
//or
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
