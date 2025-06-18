const express = require('express')
const app  = express() //u get blueprint in this 
const port  = 3000

 app.get('/point', function(req,res) {
    res.send('<h1>We\'r so back</h1>') //when endpoint / is hit u send this response
 })

 app.get('/point1', function(req,res) {
    res.send('<h1>We\'r so back on point1</h1>') //when endpoint / is hit u send this response
 })
 app.get('/point2', function(req,res) {
    res.send('<h1>We\'r so back on point2</h1>') //when endpoint / is hit u send this response
 })

 app.get('/jsonobj' , function(req,res) {
    const obj = {
        "name" : "michael",
        "age" : "49",
        "ismarried" : "false",
        "isdating" : "true",
        "occupation" : "Reginal Manager",
        "Branch"  : "Scranton"
    }
    res.send(obj);
 })



app.listen(port, () => {
    console.log(`server is  running on ${port} `);
});