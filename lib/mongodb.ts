import mongoose, { Schema, model, models } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/person-app'

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

/**
 * Avoid creating multiple connections in development when using HMR
 */
let cached: { conn: typeof mongoose | null } = (global as any)._mongooseCache || { conn: null }

async function connect() {
  if (cached.conn) return cached.conn
  const conn = await mongoose.connect(MONGODB_URI)
  cached.conn = conn
  ;(global as any)._mongooseCache = cached
  return conn
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

const User = models.User || model('User', UserSchema)
const Person = models.Person || model('Person', PersonSchema)

export { connect, User, Person }
