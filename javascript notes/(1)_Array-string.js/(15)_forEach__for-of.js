// forEach & for of

// map & forEach are related
// calls a function for each element in an array
// method is not executed for empty elements


let num = [12, 2, 89, 43, 152]

num.forEach((e) => {
    console.log(e * 2); // returns every element in array
})
          // &
for(let e of num) {
    console.log(e * 2); // also returns every element in array
}