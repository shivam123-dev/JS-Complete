// Javascript type conversion

console.log('This is tut5');

let myVar;
myVar = String(34);
// console.log(myVar, typeof myVar);

let booleanVar = true;
// console.log(booleanVar, typeof booleanVar);
booleanVar = String(booleanVar)
// console.log(booleanVar, typeof booleanVar);

let date = new Date();
// console.log(date, (typeof date));
date = String(date);

let arr = [1, 2, 3, 4, 5];
// Here arr.length means total number of objects
// console.log(arr, arr.length, (typeof arr));
arr = String([1, 2, 3, 4, 5]);
// Here arr.length means total number of characters
// console.log(arr, arr.length, (typeof arr));

let i = 8;
// toString() is used to convert any variable to string
// console.log(i.toString());

// Number() is used to convert any variable to number except a string and array
let stri = Number("34334"); // converts to number
stri = Number("343434d"); // returns NaN
stri = Number(false); // converts to number
stri = Number([1, 2, 2, 3]); // returns NaN
// console.log(stri, typeof stri);

// Parsing into Integer
let number = '34.343';
// console.log(number, (typeof number));
number = parseInt(number);
// console.log(number, (typeof number));
// Parsing into Float
let number1 = '34.343';
// console.log(number1, (typeof number1));
number1 = parseFloat(number1);
// console.log(number1, (typeof number1));


let number3 = parseFloat('4543.1231');
// toFixed() is used to print the number of decimal points upto which we can print that decimal number
// console.log(number3.toFixed(9), (typeof number3));

//  Javascript type coercion

let myStr = "698";
let myNum = 34;
// this will print 69834 
console.log(myStr + myNum); 
// so to avoid this we use: -
myStr = Number("698");
console.log(myStr + myNum); 