// join()

// joins all element inside an array 
// returns an array as a string.
// does not change the original array.
// Any separator can be specified. The default is comma (,).

const name7 = ["Banana", "Orange", "Apple", "Mango"];
let nm7 = name7.join(); // default is ',' 
console.log(nm7);
let nm77 = name7.join('_');
console.log(nm77);