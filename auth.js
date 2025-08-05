const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person'); 

passport.use(new LocalStrategy(async(username, password, done) => {
   //authenticate logic here
   try{
   //  console.log("Received creds" , username ,password);
    const user = await Person.findOne({username})
    if(!user) return done(null, false, {message:'Incorrect username.'})

    const IsPasswordMatch =await user.comparePassword(password);
    if(IsPasswordMatch) return done(null, user);
    else return done(null, false, {message:'Incorrect password.'})

   }catch(err){
      return done(err);
   }
}))

module.exports = passport;


