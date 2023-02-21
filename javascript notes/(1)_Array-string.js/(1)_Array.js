// Array

// An array is a special variable, which can hold more than one value


let a1 = [32, 59, 78, 'Neeva', 'Man']
console.log(a1);
console.log(a1[0]); // returns first value
console.log(a1[4]);
console.log(a1.length);

let p1 = a1.push('Parth')
console.log(a1); // adds an element at the end

a1[6] = 89
console.log(a1); // also adds an element at the end

a1[4] = 45
console.log(a1); // changes an element of an array
console.log(typeof a1);  // object