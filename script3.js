const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
   orderPizza : function(mainIngredient, ...otherIngredients)
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newARR = [1, 2, ...arr];
// the spread operatot picks all the value from the array that has been
// spreaded and puts isnt bit into the new array
console.log(newARR);

console.log(...newARR);
// logs the value of amn array individually

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
/* the spraed operator is actually a bit similar to destructing
 because it also help us get element out of array.. just
  that the spread operatot takes all the elments
   from the array without craete new variables 
   in the process */
// copy array
const mainMenuCopy = [...restaurant.mainMenu];
//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
console.log(restaurant.starterMenu, restaurant.mainMenu);
// the spraed operator works for everthing expect iterables
const str = "jonas";
const letters1 = [...str];
console.log(letters1);
const letters = [...str, "", "S."];
console.log(letters);

/*const ingredients = [
  prompt("let's make paste! ingedient 1 ?"),
  prompt("let's make paste! ingedient 1 ?"),
  prompt("let's make paste! ingedient 1 ?"),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);
*/

//objects
const newResturant = { ...restaurant, founder: 1998 };
console.log(newResturant);
const arr1 = [1, 2, ...[3, 4]];
//rest, because it is on the left hand side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//objects
const { sat, ...weeldays } = restaurant.openingHours;
console.log(weeldays);
 //functions
 const add = function(...numbers) {
  console.log(numbers)
  let sum = 0 
  for (let i = 0; i< numbers.length; i++) sum += numbers[i];
  console.log(sum);
 }
 add(2,3)
 add(5,3,7,2)
 add(8,2,5,3,2,1,4);

 const x = [25, 5, 7];
 add(...x);
   
