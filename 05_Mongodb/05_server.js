//CRUD //UD

const express = require('express')
const app = express()
const db = require('./01_db')

const {menu} = require('./04_menuSchema')

const bodyparser = require('body-parser')
app.use(bodyparser.json());


// app.post('/menu', async(req,res) => {
//     try 
//     {
//         const data = req.body;
    
//         const newMenu = new menu(data)

//         const response = await newMenu.save();
//         console.log('Menu recieved')
//         res.status(200).json(response)
//     }
//     catch(err)
//     {
//         console.log(err)
//         res.status(500).json({err : 'Internal server error'})
//     }

// })

// app.get('/menu', async(req,res) => {
//     try{
//         const data = await menu.find();

//         console.log('Data fetched')
//         res.status(200).json(data);
//     }catch(err)
//     {
//         console.log(err)
//         res.status(500).json({err : 'Internal server error'})
//     }
// })


const menuRoutes = require('./routes/menuroutes')

app.use('/menu',menuRoutes)


app.listen(3000, ()=>{
    console.log('server is running : ',3000)
})