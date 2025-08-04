const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL;
console.log("🔍 MONGO_URL from env:", mongoURL);

if (!mongoURL) {
  console.error("❌ MONGO_URL is undefined. Please check your .env file.");
  process.exit(1);
}

// ✅ Connect to MongoDB (no need for deprecated options)
mongoose.connect(mongoURL);

// Connection object
const db = mongoose.connection;

// Event listeners
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

module.exports = db;
