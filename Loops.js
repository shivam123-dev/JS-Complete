// Loops in Javascript

let arr = [1, 2, 23, 4, 4];
console.log(arr);
// 1. For loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Alternative way
// 2. forEach Loop
arr.forEach(function (element) {
    console.log(element);
});

// const ac = 0;

// 3. While Loop
let j = 7;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

// 4. Do While loop
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);

