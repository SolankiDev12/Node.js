const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

const AuthSchema = mongoose.model('AuthSchema' , userSchema);

module.exports = AuthSchema;