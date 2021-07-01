// Template Literals
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let name = 'Rohan';
let myHtml = `Hello ${name}
    <h1> This is "my" heading </h1>
    <p> You like ${fruit1} and 
    ${fruit2}</p>`;

document.body.innerHTML = myHtml;