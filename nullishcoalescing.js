// nullish caslescing value.. these are values that were introduced in esblishment in es62020
//.. the nullish opeator works like the  rest thee and the or..
// yhe difference it ONLY WORKS for nullish and undefined values
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish null and undefined (not 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
