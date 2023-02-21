// concat

// The concat() method joins two or more arrays.
// does not change the existing arrays.
// returns a new string.

const name3 = 'Deep';
const name4 = 'Jasoliya';
const nm3 = name3.concat(' ', name4);
console.log(nm3);

const num1 = [1, 2, 3, 4, 5]
const num2 = [11, 12, 13, 14, 15]
const num11 = num1.concat(num2) // joins 2 arrays
console.log(num11);
const num3 = [21, 22, 23, 24, 25]
const num22 = num1.concat(num2, num3) // joins 3 arrays
console.log(num22);