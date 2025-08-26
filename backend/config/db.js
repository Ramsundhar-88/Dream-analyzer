const mongoose = require('mongoose');
const { MONGO_URI } = require('./env');

async function connectDB() {
  if (!MONGO_URI) {
    console.error('❌ MONGO_URI not set');
    process.exit(1);
  }
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 15000
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;