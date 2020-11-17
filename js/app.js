console.log('Hello from script!');

const name = ' Sander Juškin';
const age = 19;
const job = 'customer service representative';
const city = 'Male';
const gender = 'Male';

console.log(typeof(name));
console.log(typeof(age));

function hello(){
    return 'hello';
}



//arrays
const fruit = ['apple','banana','orange','pear'];
console.log(fruit);

//Date and Time
const today = new Date();
let todayDate = today.getDate();
console.log(todayDate);
let todayMonth = today.getMonth();
console.log(todayMonth);
let todayYear = today.getFullYear();
console.log(todayYear);
//let fullDate = today.toLocaleDateString("en-US");
let option = {weekday: 'long', year: 'numeric', month:'long',day: 'numeric'};
let fullDate = today.toLocaleDateString("en-US", option); 
console.log(fullDate);

//function

const html= `
    <h1> ${fullDate} </h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>gender: ${gender}</li>
        <li> ${name} says ${hello()}</li>
    </ul>

`;

document.body.innerHTML = html;