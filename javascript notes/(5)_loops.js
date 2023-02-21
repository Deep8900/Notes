// loops 

/*
    for loop
    for in loop
    for of loop
    while loop
    do-while loop
*/


// for loops
for (let i = 0; i<3; i++){
    console.log(i);
}

// for in loops
let obj ={
    Deep: 56,
    Amish: 26,
    Kaushik: 45
}
for (let marks in obj){
    console.log(obj[marks]);
}

// for of loop
for (let b of "Dip Ja") {
    console.log(b);
}

// In while loop, function will check condition first then block runs
// while loop
let m = 0;
while(m<3) {
    console.log(m);
    m++;
}

// In do-while loop, function will run block first then check condition
// It will excute once, no matter what even if condition doesn't match
// do-while loop
let m1 = 50;
do {
    console.log(m1);
    m1++;
} while(m1 < 3)
