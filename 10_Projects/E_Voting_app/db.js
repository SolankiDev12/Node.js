const mongoose = require('mongoose'); 
require('dotenv').config();


const Mongourl  = process.env.MONGODB_URL_LOCAL;

mongoose.connect(Mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});
db.on('error', (err) => {
    console.log('Error connecting', err);
});
db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;