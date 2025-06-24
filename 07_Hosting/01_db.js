
const mongoose = require('mongoose')
require('dotenv').config()


// const Mongourl = 'mongodb+srv://<user>:<pwd>@cluster0.mslswgx.mongodb.net/'
const Mongourl = process.env.DB_URl

mongoose.connect(Mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

// use event listeners
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
