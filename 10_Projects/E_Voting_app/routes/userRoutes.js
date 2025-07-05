const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());

const userSchema = require('../models/user')
const { jwtMiddlewareToken , generateToken } = require('../jwt')


router.get('/profile' , jwtMiddlewareToken, async(req,res) =>  //see only your profile
{
    try{
        const userdata = req.userpayload; //we will get userdata like name and pwd bcz of token
        console.log('User Data : ' ,userdata);

        const userID = userdata.id;
        const user = await userSchema.findById(userID); //search this user based on extracted ID

        res.status(200).json(user);
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal Server Error'})
    }
})

router.post('/signup' , async(req, res) =>{
    try{
        const data = req.body;

        const newdata = new userSchema(data)
        const response = await newdata.save();
        console.log('Data saved') 

        const payload = {
            id : response.id
        }

        //Data is saved now will generate one token for that user with payload it can be anyhting in curr it is id
        const token = generateToken(payload);

        res.status(200).json({response : response , token : token});

    }catch(err)
    {
        console.log(err)
        res.status(500).json({err : 'Internal Server Error'})
    }
})

router.post('/signin' , async(req, res) =>{ //give ur username , pwd server will verify on JWT token on basis of  that
   try{
    const {aadhaarCardNo , password} = req.body;

    const user = await userSchema.findOne({aadhaarCardNo: aadhaarCardNo});
    if(!user || ! (await user.comparepwd(password)) )
    {
        return res.status(401).json({ error  : 'Invalid Aadhaar number or password' });
    }
    //gen token and then compare with orginal one
    const payload =  {
        id : user.id 
    }

    const token = generateToken(payload);
    res.status(200).json({token : token});

   }catch(err)
   {
        console.log(err);
        res.status(500).json({err : 'Internal server error'})
   } 
})

router.put('/profile/password', jwtMiddlewareToken, async (req, res) => {
    try {
        // Get the user payload from the JWT
        const userPayload = req.userpayload;
        const userID = userPayload.id;

        const { currPassword, updatedPassword } = req.body;

        // Find the user by ID
        const user = await userSchema.findById(userID);

        if (!user || !(await user.comparepwd(currPassword))) {
            return res.status(401).json({ error: 'Invalid current password' });
        }

        // Update the password
        user.password = updatedPassword; // Will be hashed by pre-save hook
        const response = await user.save();

        console.log('Password updated successfully');

        res.status(200).json({ message: 'Password updated successfully', response: response });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;