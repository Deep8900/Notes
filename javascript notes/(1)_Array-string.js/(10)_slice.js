// slice()

// unshift(), push(), shift(), pop(), slice(), splice() all are related

// removes certain items from array
// method returns selected elements in an array, as a new array
// method selects from a given start, up to a (not inclusive) given end
// method does not change the original array

const fruits = ['Banana', 'Apple', 'Mange', 'Orange', 'Berry']
const frt = fruits.slice(1, 3) // 1 to 2
console.log(frt); // returns [ 'Apple', 'Mange' ]

const name2 = "Deep Jasoliya"
const nm = name2.slice(3) // 3 to all 
console.log(nm); // returns p Jas