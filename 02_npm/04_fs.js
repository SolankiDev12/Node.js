//using contents from another .js file in this main file

// const server = require('./03_modules')

const note = require('./note.js')

const age = note.age; //exporting  var from another file

console.log(age)

var _ = require('lodash') //helpful with data = array

const arr = ['dev' , 'zoro' , 'nami' , '1' , 'dev']

console.log(_.uniq(arr))
console.log(_.isString(arr[0]))


