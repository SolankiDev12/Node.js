const express = require('express')
const app    = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json());
const AuthSchema = require('./03_userSchema')
const db = require('./02_db')

const { jwtMiddlewareToken , generateToken } = require('./04_jwt')

app.get('/' ,(req,res) => 
{
    res.send(`<h1> JWT TOKEN</h1>`)
})

app.post('/signup' , async(req, res) =>{
    try{
        const data = req.body;

        const newdata = new AuthSchema(data)
        const response = await newdata.save();
        console.log('Data saved') 

        const payload = {
            id : response.id,
            username : response.usernam
        }

        //Data is saved now will generate one token for that user with payload it can be anyhting in curr it is username
        // const token = generateToken(response.username);
        const token = generateToken(payload);

        res.status(200).json({response : response , token : token});

    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal Server Error'})
    }
})

app.get('/signin' , async(req, res) =>{
   //yet to impelement
})

const port = 3000 ;

app.listen(port,()=>{
    console.log('server is running : ',port)}
)