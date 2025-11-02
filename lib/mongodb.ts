import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

let isConnected = false

async function connect() {
  if (isConnected) {
    return mongoose
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })
    
    isConnected = true
    return mongoose
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
})

const PersonSchema = new Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  notes: String,
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
})

let User: any
try {
  User = mongoose.models.User || mongoose.model('User', UserSchema)
} catch {
  User = mongoose.model('User', UserSchema)
}

let Person: any
try {
  Person = mongoose.models.Person || mongoose.model('Person', PersonSchema)
} catch {
  Person = mongoose.model('Person', PersonSchema)
}

export { connect, User, Person }
