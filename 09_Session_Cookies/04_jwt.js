const jwt = require('jsonwebtoken')

require('dotenv').config()

//verify the given token
const jwtMiddlewareToken = (req, res , next) => 
{
    const token = req.headers.authorization.split(' ')[1]

    if(!token) //not found
    return res.status(401).json({error : "Unauthorized"})

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY); //token and key to verify

        req.userpayload = decoded;  //attach user info to request object
        next();
    }catch(err)
    {
        console.error(err);
        res.status(401).json({error : 'Invalid token'})
    }
}



//Function to generate the token
const generateToken = (userData) => { //it needs payload which we get from userdata
    return jwt.sign(userData, process.env.JWT_SECRET_KEY); //assigns jwt token and for that we give userdata + secret key
}



module.exports = {jwtMiddlewareToken , generateToken }