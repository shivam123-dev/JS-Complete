
let myBtn = document.getElementById('my-btn');
let content = document.getElementById('content');

// function getData() {
//     console.log("Started getData");
//     url = 'README.md';
//     fetch(url).then((response) => {     // async function
//         console.log("Inside first then");
//         return response.text();
//     }).then((data) => {
//         console.log("Inside second then");
//         console.log(data);
//     })
// }

// get Request
function getData() {
    console.log("Started getData");
    url = 'https://api.github.com/users';
    fetch(url).then((response) => {     // async function
        console.log("Inside first then");
        return response.json();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data);
    })
}
// post Request
function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"test1231321231","salary":"20000","age":"21"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json())
    .then(data => console.log(data)
    )
}
postData();
// console.log('Before running getData');
// getData();
// console.log('After running getData');