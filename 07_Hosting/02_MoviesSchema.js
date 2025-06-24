const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: 
    {
        type: String,
        required: true,
    },
    genre: 
    {
        type: String,
        enum: ['Rom-Com', 'Action', 'Comedy'],
        required : true
    }
})


const Movie = mongoose.model('Movie', movieSchema, 'movies');

module.exports = Movie