openingHours = {
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
/*const hello = new Map();
hello.set('name', 'maxwell');
console.log(hello);
for ([key, value] of hello) {
  console.log(key, value);
}
*/

const question = new Map([
  ['qustion', 'what is the best programming languages'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javacsript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);
// this is an easy way to convert  objecst to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt('your answer'));
console.log(answer);
console.log(
  question.get(answer === question.get('correct')) ||
    question.get(answer == !question.get('correct'))
);
// sometimes we neeed to convert a map to an array
// we can do that by building a new array and unpacking the  map
console.log([...question]);
console.log([...question.keys()]);
console.log(...question.values());
