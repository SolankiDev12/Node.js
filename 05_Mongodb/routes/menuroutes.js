const express = require('express')
const app = express()
const db = require('../01_db')
const router = express.Router()
const {menu} = require('../04_menuSchema')

const bodyparser = require('body-parser')
app.use(bodyparser.json());


router.post('/', async(req,res) => {
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

router.get('/', async(req,res) => {
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


router.get('/:var', async(req,res) => {
    try{
        const swaad = req.params.var;
        if(swaad == 'Spicy' || swaad == 'Sour' || swaad == 'Sweet')
        {
            const data = await menu.find({taste : swaad})

            console.log(`data fetched of type ${swaad}`)

            res.status(200).json(data);
        }else{
            res.send(`Wrong End point ${swaad}`)
        }
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal server error'})
    }
})

module.exports = router