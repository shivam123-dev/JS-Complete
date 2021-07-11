// JavaScript LocalStorage
localStorage.setItem('name', 'Rohan')
// console.log(localStorage);
localStorage.clear()
// console.log(localStorage);
localStorage.setItem('name', 'Shubham');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear();
// About JSON

obj = {name: 'shubham', length: 1, a: {this: 'that'}}
js = JSON.stringify(obj);
console.log(js);
console.log(typeof js);
console.log(js);

parsed = JSON.parse(`{"name":"shubham", "length": 1}`);
console.log(parsed);