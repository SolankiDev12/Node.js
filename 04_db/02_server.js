const express = require('express')
const app = express()

app.get('/' , function(req,res)  //we are getting data from server
{
    res.send('We are in Postman');
})

app.post('/',function(req,res) //we are sending to server 
{
    res.send('data received')
})

const port = 3000;

app.listen(port, () => 
{
    console.log(`server is  running on ${port} `);
});

// npm install mongodb
