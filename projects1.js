/*
arr1 = [7, 8, 8, 9, 9, 4];
for (let i = 0; i < arr1.length; i++) {
  console.log('forgotten loops??');
}
count = 0;
while (count <= 10) {
  console.log('easy while loops');
  count++;
}
const person = {
  name: 'maxwell',
  age: 17,
  country: 'nigeria',
};
const { name: myanem, age: myage, country: mycountry } = person;
console.log(myanem, myage, mycountry);
*/
arr1 = [1, 2, 3, 4];
arr2 = [4, 5, 6, 7];
my_name = prompt('what is your name ');
if (my_name === 'maxwell') {
  console.log([...arr1, ...arr2]);
} else {
  console.log('hi');
}
