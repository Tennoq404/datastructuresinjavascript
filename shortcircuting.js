console.log(3 || 'jonas');
//other properties of logical operators
//.. they can use any data type
// the can return any data type and the perform short circuit evaluation
// this means if the first value is a truthy value value.. it will immediately return that value
console.log('' || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

//resturant.numGuests = 23;
//const guests1 = resturant.numGuests ? resturant.numGuests : 10;
//console.log(guests1);

//const guests2 = resturant.numGuests || 10;
//console.log(guests2);
// 0 is also a falsy value

console.log('----AND----');
// the and works in the oppsite way of the or operator
// the and operator shortcircuit when thr firdt value is falsy
console.log(0 && 'jonas');
console.log(7 && 'jonas');
console.log('jonas' && 0);
console.log('hello' && 23 && null && 'jonas');

if (restaurant.orderpizza) {
  restaurant.orderpizza('mushrooms', 'spinach');
}
restaurant.orderpizza && restaurant.orderpizza('mushrooms', 'spinach');
