// Array.from()

// you cannot run methods like pop or slice etc. on HTML collections, so you need to convert them into array first by using Array.from()
// Ex :
// const image1 = document.querySelectorAll("img");
// const image2 = Array.from(image1)

// also converts string into array
const name10 = "Deep"
let nm10 = Array.from(name10)
console.log(nm10);