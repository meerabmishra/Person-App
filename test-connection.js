require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

async function testConnection() {
  try {
    console.log('Attempting to connect to MongoDB...')
    const conn = await mongoose.connect(MONGODB_URI)
    console.log('✅ Successfully connected to MongoDB!')
    console.log('Database name:', conn.connection.db.databaseName)
    await mongoose.disconnect()
    console.log('Connection closed')
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message)
  }
}

testConnection()