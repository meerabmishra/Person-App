import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || process.env.DATABASE_URL || ''

async function testConnection() {
  try {
    const conn = await mongoose.connect(MONGODB_URI)
    console.log('Successfully connected to MongoDB!')
    console.log('Database name:', conn.connection.db.databaseName)
    await mongoose.disconnect()
    console.log('Connection closed')
    process.exit(0)
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    process.exit(1)
  }
}

testConnection()