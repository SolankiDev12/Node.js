// Establish Connection of Mongoose with Node.js
const mongoose = require('mongoose'); 

const Mongourl = 'mongodb://127.0.0.1:27017/cruddb'; 

mongoose.connect(Mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// now you can use the mongoose connection object
const db = mongoose.connection; // link MongoDB and Node server

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
