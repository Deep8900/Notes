// conditionals

/*
    if
    else
    else if
    switch
*/

// if
let m1 = 34
let m2 = 67
if(m1 < m2){
    console.log("m1 is greater than m2");
}

// if else
let a1 = 23
let a2 = 45
if (a1 > a2) {
    console.log("a1 is Greater than a2");
}else{
    console.log("a1 is less than a2");
}

// else if 
let age = 2;
if (age < 18) {
    console.log("Age is less than 18"); 
} else if(age>=18 && age<25){
    console.log("Age is between 18 to 25");
}else{
    console.log("Age is Greater than 25");
}
console.log("You can", age>18 ? "Enter" : "Not Enter"); // Ternary Operator

// switch
let nj = 12
switch (nj) {
    case 11:
        console.log("your num is 11");
        break;
    case 12:
        console.log("your num is 12");
        break;
    case 13:
        console.log("your num is 13");
        break;
    default:
        console.log("your num is not special");
}