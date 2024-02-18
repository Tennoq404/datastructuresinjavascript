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

//console.log(restaurant.openingHours.mon.open);
// the result of thios would be an error because it previous resilt was undefined
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// in this acse we are checking if they exist..because we are getting data
//from an api
// we cant be really sure.. there would be sn openhours property in the
//resturant object.. we can use if statements to cater for this all through
//but our code can get ambious sometimes.. therefore we would use
//optional chaining
console.log(restaurant.openingHours?.mon?.open);
// this optionalchaining symbol is a question mark before the dot..
// the optionalchaning function will check if the property7 is avaiable before
// if it isnt.. it would not read the next value
const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
//for (const [i, el] of weekdays.entries()) {
// console.log(`${el} is the ${i + 1} day of the week`);
//}

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1)) ?? 'Method does not exist';
console.log(restaurant.orderrisotto?.(0, 1) ?? 'method does not exist');
const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'user array empty');
