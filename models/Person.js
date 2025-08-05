const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
//Define person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    work: {
        type: String,
        enum: ['chef', 'manager', 'waiter'],
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type:String,
        require:true
    }
});

personSchema.pre('save', async function (next) {
    const person = this;
    //Hash the password only if it has been modified or is new
    if(!person.isModified('password')) return next();

    try{
        //hash passowrd generate
        const salt = await bcrypt.genSalt(10);

        //Hash password
        const hashPassword = await bcrypt.hash(person.password,salt);

        //overide the plain passowrd with bashed one
        person.password = hashPassword;
        next();
    }
    catch(err){
      return next(err);
    }
})

personSchema.methods.comparePassword = async function (candidatePassword) {
    try{
     // use bcrypt to comapre the provided password with the hashed password
     const isMatch = await bcrypt.compare(candidatePassword,this.password);
     return isMatch;
    } catch(err){
        throw err;
    }
}

const Person = mongoose.model('Person', personSchema);
module.exports = Person;