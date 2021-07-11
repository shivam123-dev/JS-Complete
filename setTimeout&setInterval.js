// Arrow Functions

// function sum(a, b) {
//     return a+b;
// }
sum = (a, b)=>{
    return a+b;
}

// Javscript SetTimeout and SetInterval

// logKaro = ()=>{
//     console.log('I am your log');
// }
// setTimeout(logKaro, 2000);

// Alternative and best way
setTimeout(() => {
    console.log('I am your log');
}, 2000);

setInterval(()=>{
    console.log('I am your log');
}, 2000);

// use clearInterval/clearTimeout to cancel setInterval/setTimeout