const mongoose = require('mongoose');

// Define the MongoDb connection URL
// const mongoURL = 'mongodb://127.0.0.1:27017/hotels' // here hotels is database name 
// const mongoURL = process.env.MONGO_URL_LOCAL;
const mongoURL = process.env.MONGO_URL;
require('dotenv').config();
// Set up MongoDB connection
mongoose.connect(mongoURL)

//Get default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to  MongoDb server')
})

db.on('error', (err) => {
    console.log('MongoDb connection error', err)
})

db.on('disconnected', () => {
    console.log('Disconnected to  MongoDb server')
})

db.on('reconnected', () => {
    console.log('MongoDB reconnected');
});


//Export database connection
module.exports = db;
