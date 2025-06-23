const express = require('express')
const router = express.Router()
const db = require('../01_db')
const {Person} = require('../02_schema')

const bodyparser = require('body-parser')
router.use(bodyparser.json());

//we'll get data from client on endpoint 
router.post('/',  async(req,res)=>{
    try{
        const data = req.body;
        const newperson = new Person(data);

        const response = await newperson.save();
        console.log("data Saved") //for us

        res.status(200).json(response) //for  client

    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal server error'})
    }
})

//fetch data from db
router.get('/', async(req,res) => {
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

router.get('/:var' , async(req,res) => {
    const worktype = req.params.var;

    try{
        if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter')
        {
            const data = await Person.find({work: worktype})
            console.log(`Data fetched ${worktype}`)
            res.status(200).json(data);
        }else{
            res.send("Invalid Worktype only acceptable are : Chef,manager,waiter")
        }
    }catch(err)
    {
        console.log(err);
        res.status(500).json({err : 'Internal server Error'})
    }
})


//update

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const newdata = req.body;

        const response = await Person.findByIdAndUpdate(personId, newdata, {
            new: true, // Return the updated document
            runValidators: true,
        });

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.json(response);

        console.log('Updating ID:', personId);
console.log('New data:', newdata);


    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Internal server Error' });
    }
});


router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id; // Extract the person's ID from the URL

    // Delete the person by ID
    const deletedPerson = await Person.findByIdAndDelete(personId);

    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    console.error('Error deleting person:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




module.exports = router