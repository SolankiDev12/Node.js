const express = require('express')
const app = express()
const db = require('./01_db')
const {Person} = require('./02_schema')

// const bodyparser = require('body-parser')
// app.use(bodyparser.json());

var fs  = require('fs');

app.get('/', function(req,res){
    res.send('MongoDb and node.js')
})

const personroutes = require('./04_routes/01_personroutes')
app.use('/person',personroutes)



app.listen(3000, ()=>{
    console.log('server is running : ',3000)
})