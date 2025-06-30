const mongoose = require('mongoose')

const bcrypt = require('bcrypt')
 

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


userSchema.pre('save' , async function(next)
{
    const user = this; //curr user

    // there are two cases either pwd is updated or any other field is moodified
    if(!user.isModified('password')) 
        return next();

    try{
        const salt = await bcrypt.genSalt(10); //10 digti salt for hashed pwd // salt = "some random msg"
        const hashpwd = await bcrypt.hash(user.password,salt);

        user.password = hashpwd
        next()

    }catch(err)
    {
        return done(err);
    }
})

userSchema.methods.comparepwd = async function(candidatepwd){
    try {
        return await bcrypt.compare(candidatepwd, this.password);
    } catch(err) {
        throw err;
    }
}


const AuthSchema = mongoose.model('AuthSchema' , userSchema);

module.exports = AuthSchema;