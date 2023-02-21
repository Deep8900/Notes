// sort()

// sorts an array alphabetically
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
const frt7 = fruits7.sort();
console.log(frt7);

// this function sorts an array into ascending (1 to 10)
let com = (a,b) => {
    return a - b
}
let num = [52, 5, 1, 485, 54, 89, 850]
num.sort(com)
console.log(num);