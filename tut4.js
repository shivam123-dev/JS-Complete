// Data Types in JavaScript (Primitive & Reference Types)

// Primitive Data Types: - 

// 1. String
let name1 = "shivam";
console.log("my string is " + name1);
console.log("my data type is " + typeof name1);

// 2. Marks
let marks = 34;
console.log("my marks is " + marks);
console.log("my data type is " + typeof marks);

// 3. Boolean
let isDriver = true;
console.log("Data type is " + typeof isDriver);

// 4. NULL
let nullVar = null;
console.log("Data Type is " + typeof nullVar);

// 5. Undefined
let undef = undefined;
console.log("Data type is " + typeof undef);

// Reference data types

// 1. Arrays
let myarr = [1, 2, 3, 4, false]
console.log("Data type is " + typeof myarr);

// 2. Object Literals
let marks1 = {
    shivam: 34,
    rohan: 36,
    aniket: 89,
    kalyanjai: 20
}
console.log(marks1);
console.log("Data type is " + typeof marks1);
function findname() {
    
}
console.log("type is " + typeof findname);

let date = new Date();
console.log(typeof date);