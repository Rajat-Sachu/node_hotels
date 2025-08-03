const mongoose = require("mongoose");

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
    }
});
const Person = mongoose.model('Person', personSchema);
module.exports = Person;