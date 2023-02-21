// map & filter & reduce


// map
// map & forEach are related
// creates a new array from calling a function for every array element
// calls a function once for each element in an array
// does not execute the function for empty elements
// does not change the original array
// Ex: 
let arr = [45, 56, 86]
let a = arr.map((e) => {
    return e * 2  // changes every element of an array
})
console.log(arr); // does not change an original array
console.log(a); // new array



// filter
//) creates a new array filled with elements that pass a test provided by a function.
// does not execute the function for empty elements.
// does not change the original array
// Ex: 
let arr2 = [45, 25, 75]
let a2 = arr2.filter((e) => {
    return e > 30   // returns elements greater than 30
})
console.log(a2);



// reduce
// Subtract all numbers in an array
// executes a reducer function for array element
// returns a single value: the function's accumulated result
// does not execute the function for empty array elements
// does not change the original array
// Ex: 
let arr3 = [25, 12, 12, 81]
let a3 = arr3.reduce((e1, e2) => {
    return e1 + e2   // returns total sum of an array
})
console.log(a3);