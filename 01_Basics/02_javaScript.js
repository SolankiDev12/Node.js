// npm i prompt-sync

const prompt = require('prompt-sync')();

let age = prompt('Enter your age: ');

if(age >= 18) {
    console.log('You are eligible to vote.');
}
else {
    console.log('You are not eligible to vote.');
}   
