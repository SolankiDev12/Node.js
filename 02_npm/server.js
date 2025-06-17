console.log('server file is running')

console.log('server file is running')


// const chai = function () {
//     let username = "dev"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "dev"
    console.log(this);
}
// chai()


//Three ways

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "dev"})


console.log(addTwo(3, 4))

// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();


// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')