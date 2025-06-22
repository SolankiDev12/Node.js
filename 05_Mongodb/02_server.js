const express = require('express')
const app = express()
const db = require('./01_db')
// const Person = require('./03_schema')  not valid as u have exported wrong valid if module.exports = person
const {Person} = require('./03_schema')

const bodyparser = require('body-parser')
app.use(bodyparser.json());

var fs  = require('fs');

app.get('/', function(req,res){
    res.send('MongoDb and node.js')
})

//we'll get data from client on endpoint 
app.post('/person',  async(req,res)=>{
    try{
        const data = req.body;
        const newperson = new Person(data);

        const response = await newperson.save();
        console.log("data Saved") //for us

        res.status(200).json(response) //for  client

        fs.writeFile('Data.txt',response.name, ()=>{
            console.log('Data is also saved in data.txt file')
        })

    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal server error'})
    }
})

//fetch data from db
app.get('/person', async(req,res) => {
    try{
        const data  = await Person.find()
        console.log('Data fetched')
        res.status(200).json(data);
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal server error'})
    }
})


app.listen(3000, ()=>{
    console.log('server is running : ',3000)
})