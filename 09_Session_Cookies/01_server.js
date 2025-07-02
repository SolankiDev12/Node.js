const express = require('express')
const app    = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json());
const AuthSchema = require('./03_userSchema')
const db = require('./02_db')

const { jwtMiddlewareToken , generateToken } = require('./04_jwt')

app.get('/' , jwtMiddlewareToken, async(req,res) => 
{
    // res.send(`<h1> JWT TOKEN</h1>`)
    try{
        const data = await AuthSchema.find();
        console.log('Data fetched');
        res.status(200).json(data);
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal Server Error'})
    }
})
app.get('/profile' , jwtMiddlewareToken, async(req,res) =>  //see only your profile
{
    try{
        const userdata = req.userpayload; //we will get userdata like name and pwd bcz of token
        console.log('User Data : ' ,userdata);

        const userID = userdata.id;
        const user = await AuthSchema.findById(userID); //search this user based on extracted ID

        res.status(200).json(user);
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal Server Error'})
    }
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

app.post('/signin' , async(req, res) =>{ //give ur username , pwd server will verify on JWT token on basis of  that
   try{
    const {username , password} = req.body;

    const user = await AuthSchema.findOne({username: username});
    if(!user || ! (await user.comparepwd(password)) )
    {
        return res.status(500).json({ error  : 'Internal server error '})
    }
    //gen token and then compare with orginal one
    const payload =  {
        id : user.id , 
        username : user.username
    }

    const token = generateToken(payload);
    res.status(200).json({token : token});

   }catch(err)
   {
        console.log(err);
        res.status(500).json({err : 'Internal server error'})
   } 
})

const port = 3000 ;

app.listen(port,()=>{
    console.log('server is running : ',port)}
)