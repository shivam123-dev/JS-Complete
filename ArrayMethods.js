// Array Methods
let myArr = ["Fan", "Camera", 34, null, true];
console.log(myArr.length);
myArr.pop(); // Removes the element from last
console.log(myArr);
myArr.push("rohan"); // Adds the element at last
console.log(myArr);
// removes an element at a specified position and shifts 
// the remaining elements up.
myArr.shift();  
console.log(myArr);
const Len = myArr;
console.log(Len);
// adds a new element at a particular position and
// shifts the remaining elements down the list.
myArr.unshift();
console.log(myArr);
const newLen = myArr;
console.log(newLen);

// for sorting the array elements
console.log(myArr.sort());
// converts the array to string
console.log(myArr.toString());