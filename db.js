const mongoose = require('mongoose');

// Get MongoDB connection string from environment variables
const mongoURL = process.env.MONGO_URL;

if (!mongoURL) {
  console.error("❌ MONGO_URL is undefined. Please check your .env file.");
  process.exit(1); // Exit the app if MongoDB URL is missing
}

// Get default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
  console.log('✅ Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.warn('⚠️ Disconnected from MongoDB server');
});

db.on('reconnected', () => {
  console.log('🔄 MongoDB reconnected');
});

// Export database connection
module.exports = db;
