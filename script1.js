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
  order: function (starterIndex, mainindex) {
    return this.starterMenu[starterIndex], this.mainMenu[this.mainMenu];
  },

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
};

const {
  name: restaurantname,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantname, hours, tags);
//SETTING  DEFAULT VALUES FOR OBJECTS
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
b;
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 }(
  //to mutate or overwrite values
  ({ a, b } = obj)
);
console.log(a, b);
//nested objects
const { fri } = openingHours; // with this syntax.. you can destructed the object. but
//sometimes you might what make twp more variables
// const {fri :{ open : o , close : o }} = openingHours.. you can do that with this syntax
//you can go further and assign variable sto the them using colon
console.log(fri); // with

//console.log(restaurant.menu);

//destructing is an es6 feature
//breaking complex data structures to samller data structures
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//normally we could assign the 3 values to different variables lkike this
//but in destructing there is an easier way
const [x, y, z] = arr;
console.log(x, y, z);
// whenever js seees this on the left side on the left side of the equal sign
// it knows that it should do destructing
console.log(arr);

let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);
// it follow sthe order of variables.. considering the fact that there are only two variables, it
//grabs the first two values of the array
// if we want to pick the value after ,, we can simply leave a hole

[main, secondary] = [secondary, main];

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
//const [m, n, ]

//nested destructing. this is the act of doing destrucring inside destructring
const [i, [j, k]] = nested;
console.log(i, j, k);
//seting default values.. in case of real world problems
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
// this can be very sometimes when we get data from an api
*/
