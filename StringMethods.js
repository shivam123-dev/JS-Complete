// String Methods in Javascript

let myStr =  'Rohan is a good boy';
console.log(myStr); // prints the string
console.log(myStr.length); // prints the length of the string
console.log(myStr.indexOf('good')); // prints the idex of first occurrence of the string
console.log(myStr.lastIndexOf('good')); // prints the idex of last occurrence of the string

// slicing the string
console.log(myStr.slice(1,4));

// replacing a word in string
d = myStr.replace('Rohan', 'Shubham');
console.log(d, myStr);