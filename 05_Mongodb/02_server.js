const express = require('express')
const app = express()
const db = require('./01_db')
const person = require('./03_schema')

app.get('/', function(req,res){
    res.send('MongoDb and node.js')
})

app.listen(3000, ()=>{
    console.log('server is running : ',3000)
})