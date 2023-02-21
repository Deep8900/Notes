// Operators

// In '7+8', 7 and 8 are operands & + is operator
/*
    Types of JavaScript Operators
      Arithmetic Operators
      Assignment Operators
      Comparison Operators
      Logical Operators
*/


// Arithmetic Operators
let a = 34;
let b = 3;
console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a / b =", a/b);
console.log("a * b =", a*b);
console.log("a ** b =", a**b); // a power b
console.log("a % b =", a%b); // modulas

// Assignment Operators
let kam1 = 45
let kam2 = 45
let kam3 = 45
let kam4 = 45
let kam5 = 45
console.log(kam1 += 10); // decrease a number 
console.log(kam2 -= 10); // increase a number
console.log(kam3 /= 10); // divide a number
console.log(kam4 *= 10); // multiply a number
console.log(kam5 %= 10); // modulas

// Comparison Operators
let com1 = 6
let com2 = "6"
let com3 = 10
console.log("com1 == com2 is", com1 == com2); // Equals to
console.log("com1 != com2 is", com1 != com2); // Not Equals to
// in '===' even number and string have to be same, which is not in below
console.log("com1 === com2 is", com1 === com2); // Equals to
console.log("com1 !== com2 is", com1 !== com2); // Not Equals to
console.log("com1 > com3 is", com1 > com3); // greater than

// llgical Operators
let na1 = 5
let na2 = 6
console.log(na1 < na2 && na1 == 5); // Both condition are true
console.log(na1 < na2 || na1 == 10); // Atleast one condition have to be true
console.log(!true); // turns true into false
console.log(!false); // turns false into true