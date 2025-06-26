const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy ; 
const AuthSchema = require('./04_userSchema')

passport.use(new LocalStrategy(async (usrname, pwd, done) => {
  try {
    const user = await AuthSchema.findOne({ username: usrname });
    
    console.log('Username:', usrname);
    console.log('User from DB:', user);
    console.log('Password Match:', user?.password === pwd);


    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    const passwordMatch = user.password === pwd;
    if (passwordMatch) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect password.' });
    }
  } catch (err) {
    return done(err);
  }
}));


module.exports = passport
