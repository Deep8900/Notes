// splice()

// unshift(), push(), shift(), pop(), slice(), splice() all are related

// adds and/or removes array elements.
// overwrites the original array


// At position 2, add 2 elements
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits8); // adds 2 elements at 2nd position


// At position 2, add 2 elements
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.splice(2, 2, "Lemon", "Kiwi", "Cherry");
console.log(fruits9) // adds 3 element and removes 2 element at 2nd position


// At position 2, remove 2 items:
const fruits10 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits10.splice(2, 2);
console.log(fruits10); // removes 2 elements at 2nd position