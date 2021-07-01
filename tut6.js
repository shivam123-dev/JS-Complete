console.log('This is tut6');
const name = 'Shivam';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html = "<h1> This is heading</h1>" +
    "<p> This is my para</p>"
// Alternative of doing "+" everytime before adding a new string.
html = html.concat('this'); // it joins two or more strings
console.log(html);

// prints the length of the string
console.log('Length of the string:',html.length);

// for converting whole string to lower case we can use: - 
console.log(html.toLowerCase());
// for converting whole string to upper case we can use: - 
console.log(html.toUpperCase());
// this will print the original string beccause we didn't update the string
console.log(html);

// string slicing
console.log(html[0]); // prints the first character

// prints the starting index of the string
console.log(html.indexOf('h1'));
console.log(html.indexOf('<'));

// prints the last index of the string
console.log(html.lastIndexOf('<'));

// prints the character at the given index
console.log(html.charAt(0));

// want to check something
console.log(html.endsWith('this'));
console.log(html.endsWith('sleriwaer'));

// to print the substring from starting Index to ending index-1
console.log(html.substring(0,3));

// to print the last 4 characters
console.log(html.slice(-4));
// to print the starting 4 characters
console.log(html.slice(0,4));

// for splitting the string into elements
console.log(html.split(' '));
console.log(html.split('>'));

// for replacing the first occurence of the string
console.log(html.replace('this', 'it'));
