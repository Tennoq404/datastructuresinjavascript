// a set is a collection of unique values.. this meams a set cant have any duplicates
// to create a vnew set we need to write new set and pass in an iterable
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
// a setv can also hold mixed data types
console.log(ordersSet);

//for (const key of ordersSet) {
//  console.log(key);
//}
// the order of elements in a set is also irelevant

//for (const key of 'HIGHER') {
// console.log(key);
//}

console.log(new Set('Jonas'));
console.log(ordersSet.size);
// theis checks the number of elements that are in the set
// we can also check if a set has something
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('curger'));
// in arrays we use has instaed of includes
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('risotto');
console.log(ordersSet);
//in sets there are no indexes and really no way of getting values out of a set
// thats because all the elements in sets are unique.. so there is no need for indexes

for (const order of ordersSet) {
  console.log(order);
}
// they can also be loop over because the iterables
// the main use case of sets is to remove duplicate value sof arrays
//example
const staff = ['waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);
