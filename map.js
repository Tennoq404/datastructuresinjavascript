//staff = new Set(['max', 'max', 'aun']);
//console.log(staff);
// what is a map ?
// in javascript a map is a data structure that we use to map values to keys
// just like in objects
// data is stored in key value pair in maps
// the big difference between objects and maps is that in maps the keys can be any type

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, italy');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open : D')
  .set(false, 'We are closed :(');
//console.log(rest);
// in order to read data from a map we used the get method
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// to get the size of the maps
const arr = [1, 2];
rest.set(arr, 'Test');
//rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arr));
