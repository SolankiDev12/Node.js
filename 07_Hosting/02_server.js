const express = require('express')
const app = express()
const Movie = require('./02_MoviesSchema')
const db = require('./01_db')

const bodyparser = require('body-parser')
app.use(bodyparser.json());

const {menu} = require('./04_menuSchema')

require('dotenv').config()
//https://nodejs-zfe6.onrender.com/
app.get('/', (req,res) => {
    console.log("Connected with MongoDb Atlas online and local node env")
})


app.post('/menu', async(req,res) => {
    try 
    {
        const data = req.body;
    
        const newMenu = new menu(data)

        const response = await newMenu.save();
        console.log('Menu recieved')
        res.status(200).json(response)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal server error'})
    }

})

app.get('/menu', async(req,res) => {
    try{
        const data = await menu.find();

        console.log('Data fetched')
        res.status(200).json(data);
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal server error'})
    }
})


app.get('/movie/:var' , async(req,res) => {
    try
    {
        const type = req.params.var;

        if(type == 'Rom-Com' || type =='Action' || type == 'Comedy')
        {
            const data = await Movie.find({genre : type});
            console.log('Data fetched')
            res.status(200).json(data);
        }
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal server error'})
    }
})
app.get('/movie' , async(req,res) => {
    try
    {
        const data = await Movie.find();
        console.log('Data fetched')
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal server error'})
    }
})

app.post('/movie' , async(req,res) => {
    try{
        const data = req.body;

        const newmovie = new Movie(data);

        const response = await newmovie.save();

        if(!response)
        {
            console.log("Not saved");
            res.status(500).json(response)
        }
        console.log('Movie recieved')
        res.status(200).json(response)
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal server error'})
    }
})


const port = process.env.PORT || 30001 ;

app.listen(port,()=>{
    console.log('server is running : ',port)}
)