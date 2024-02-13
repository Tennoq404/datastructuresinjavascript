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
  orderpasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicios pasta with ${ing1}, ${ing2} and ${ing3}}`
    );
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole 21',
  mainIndex: 2,
  staterIndex: 2,
});

// spread operator is used for unpacking arrays
//unpacking all array elements at once
// for example

const arr = [7, 8, 9];
//lets say we want to create a new array based on this
//array but with elements in the beginning
const badNewArr = [1, 2, arr[1], arr[1], arr[2]];
// with the spread opertor is works in a much more easy fashion
const newArr = [1, 2, ...arr];
//this spreads the values of the array
//console.log(newArr);
//console.log(1, 2, arr);
// the spreead operator takes all the elements out of the current array and puts
//them in a new array manually
//console.log(...newArr);
// will log the arrays individually

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//And keep in mind thyeat here, we are indeed creating a completely new
//array.. we are not manipulating the resturant.mainmenu array
//builds a new array from scratch
//const [hey, hi] = restaurant.mainMenu;
//console.log(hey, hi);
// THE SPREAD OPERATOR IS USED MAINLY FOR TWO THINGS
// TO CREATE SHADOE COPIES OF ARRAYS
//.. TO MERGE ARRAYS TOGETHER
const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
//spread operator works on all iterables
//iterables : arrays, strings, maps,sets, Not objects
const str = 'jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
//real world example
/*
const ingredients = [
  prompt(`lets make pasta! ingredient 1 ?`),
  prompt(` ingredient 2 ?`),
  prompt(` ingredient 3 ?`),
];

console.log(ingredients);
restaurant.orderpasta(...ingredients);
*/

//objects
const newResturant = { foundedIn: 1998, ...restaurant, founder: 'guiseppe' };
console.log(newResturant);

const resturantCopy = { ...restaurant };
resturantCopy.name = 'restorante roma';
console.log(resturantCopy.name);
console.log(resturant.name);
