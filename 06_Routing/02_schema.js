const mongoose = require('mongoose')

const presonSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    age : {
        type: Number
    },
    work:{
        type: String,
        enum :['chef', 'waiter' , 'manager']
        ,required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email :{
        type: String,
        required: true,
        unique:true
    }
});


const Person = mongoose.model('Person',presonSchema)

module.exports = {
    Person
}