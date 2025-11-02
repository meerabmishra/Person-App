import mongoose, { Schema, model, models, connect as _connect } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || process.env.DATABASE_URL

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: Cached = { conn: null, promise: null }

async function connect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 1,
      minPoolSize: 0,
      maxIdleTimeMS: 10000,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 20000,
    }

    cached.promise = _connect(MONGODB_URI!, opts).then((mongoose) => {
      mongoose.set('strictQuery', true)
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
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
  User = models.User || model('User', UserSchema)
} catch {
  User = model('User', UserSchema)
}

let Person: any
try {
  Person = models.Person || model('Person', PersonSchema)
} catch {
  Person = model('Person', PersonSchema)
}

export { connect, User, Person }
