// unshift

// unshift(), push(), shift(), pop(), slice(), splice() all are related

// adds new elements to the beginning of an array
// overwrites the original array
// changes the length of the array
// returns the new length

// unshift() adds new elements to the beginning of an array
// push() adds new elements at the end of an array
// shift() removes the first element of an array
// pop() removes the last element of an array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const frt1 = fruits.unshift("Lemon","Pineapple");
console.log(fruits);