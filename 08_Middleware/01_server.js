const express = require('express')
const app    = express()

const {menu} = require('./03_menuSchema')
const bodyparser = require('body-parser')
app.use(bodyparser.json());

const db = require('./02_db')

//middleware fnc
const logReq = (req, res ,next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to : ${req.url} `)
    next() //neccessary to move to the next middleware
}

app.use(logReq) //use in all routes
// npm install passport passport-local
app.get('/', logReq ,(req,res) => {
    console.log("Middleware + Auth") //if we dont use next() then this all will not be executed
    res.send(`<h1> Middleware + Auth </h1>`)
})

//

// req => middleware => res 
//e.g -> bodyparser , router
//


const AuthSchema = require('./04_userSchema')
const passport = require('./05_Auth')

app.use(passport.initialize());

app.get('/auth', passport.authenticate('local', { session: false }), (req, res) => {
    console.log(`auth route accessed`);
    res.send('Authenticated successfully!');
});



const port = 3000 ;

app.listen(port,()=>{
    console.log('server is running : ',port)}
)