/*const maxwell = 'maxwell';
const maxwellmagaji = {
  name: maxwell,
  age: 19,
  school: 'bowen university',
  babes : {
    name1 : 'nerat',
    name2 : 'nora',
    name3 : 'kunarah'
  }
};
const { name: firstname, age: count, school: COL } = maxwellmagaji;
console.log(firstname, count, COL);
*/
//many times in js we have functions with a lot of parameters.. but then it can be hard to know the order of parameters
// for someone that is using this function.. so instaed of defining parameters manually
//we can just pass an object into the function as an argument
//and the function will then immediately destructure thst object
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainindex) {
    return this.starterMenu[starterIndex], this.mainMenu[this.mainindex];
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
  orderDelivery: function (
    starterindex = 1,
    mainindex = 0,
    time = '20.00',
    address
  ) {
    console.log(`order received! ${this.starterMenu[starterindex]} and ${this.mainMenu[mainindex]} will be
        delivered to ${address} at ${time}`);
  }, //properties id the index dont have to match the order in with we do destructuring
  //we can set default values for objects
};
restaurant.orderDelivery({
  time: '22: 30',
  address: 'via del sole 21',
  mainindex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del Sole 21',
  starterIndex: 1,
});

const {
  name: restaurantname,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantname, hours, tags);
//SETTING  DEFAULT VALUES FOR OBJECTS
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 }(
  //to mutate or overwrite values
  ({ a, b } = obj)
);
console.log(a, b);

// spread operator is used for unpacking arrays
//unpacking all array elements at once
// for example

const arr = [7, 8, 9];
//lets say we want to create a new array based on this array but with elements in the beginning
const badNewArr = [1, 2, arr[1], arr[1], arr[2]];
// with the spread opertor is works in a much more easy fashion
const newArr = [1, 2, ...arr];
//this spreads the values of the array
console.log(newArr);
