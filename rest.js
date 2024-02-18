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
  orderpizza: function (mainIngredient, ...otheringredient) {
    console.log(mainIngredient);
    console.log(otheringredient);
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole 21',
  mainIndex: 2,
  staterIndex: 2,
});

// the rest actually lloks like the spread operator
// but they perform opposite function
//the rest paatern is used to collect multiple elements and condense them into an array

//onst arr = [1, 2, ...[3, 4]];
// we know that this is the spread syntax because we are using it on the right hand side of the assidment operator
// when we us it on the left hand side of the assigment operator ..
// it is called the REST PATTERN
//
//const [a, b, ...others] = [1, 2, 3, 4, 5];

//console.log(a, b, others);
// this will obviously store or destructure 1 and 2 to the a and b variables
//and create an array "others for the reamining"

//const [pizza, , risotto, ...otherfood] = [
//...restaurant.mainMenu,
//...restaurant.starterMenu,
//];
// the rest element always has to be the last element when destructuring

//objects

//const { sat, ...weekdays } = restaurant.openingHours;
//console.log(sat, weekdays);

//Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderpizza('mushrroms', 'onons', 'olives', 'spinach');
