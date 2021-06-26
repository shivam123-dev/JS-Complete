// Variables: let, const & var in JavaScript
console.log('tut3');

// Variables in js
// var, let, const -> Used for declaring the variables

// let and const are mostly used because they increase the code's readability

var name = 'Shivam';
console.log(name);
var channel = "Red FM";
console.log(channel);
let roll = 34;
console.log(name, channel, roll);

// Rules for creating javascript variables
// 1. Cannot start with numbers
// 2. Can start with letter, numbers, _ or $
// 3. Are case sensitive

var city = 'Delhi'
console.log(city);

// const data type is used when we do not want to override that variable
const OwnersName = 'Harri Ram';
console.log(OwnersName);

// Cannot do this
// const fruit;

// let has the block level scope whereas var has global level scope hence let is used widely 

{
    let city = 'Rampur';
    city = 'Lolata';
    console.log(city);
}
console.log(city);

// By declaring arr1 by const data type we can use modify the array but we cannot reinitialise that variable
const arr1 = [1, 2, 3, 4, 5];
arr1.push(45); // used for inserting the element to array
console.log(arr1);

/* Most common programming case types:-

 1. camelCase
 2. kebab-case
 3. snake_case
 4. PascalCase

*/

