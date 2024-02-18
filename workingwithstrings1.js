const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
//but this usually gives you the first index
console.log(airline.lastIndexOf('r'));
// this will give you the last index
// strings are also zero based
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//console.log(airline.slice(4, 9));
// the length of the extracted string is always going to be the the
//subtraction of the two strings
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
// write a function that gets a middle seat parameter.. and checks if its a middle seat or not

const Middle_seat = function (seat) {
  // B amd E are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat❤');
  else console.log('you got lucky');
};

Middle_seat('11B');
Middle_seat('23c');
Middle_seat('3E');
