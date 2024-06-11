import mongoose from 'mongoose'

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    return true
  }

  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to MongoDB')
    return true
  } catch (err) {
    console.log(err)
  }
}

export default connectDb
