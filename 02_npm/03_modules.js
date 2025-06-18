var fs  = require('fs');
var os  = require('os');

console.log(os.userInfo());
console.log(os.type());

// fs.appendFile('greet.txt', `Hi ${os.userInfo().username} \n`,() => {
//     console.log('file created')
// })


fs.writeFile('greet.txt', `Hi ${os.userInfo().username} \n`,() => {
    console.log('file created')
})

// console.log(os)
// console.log(fs)