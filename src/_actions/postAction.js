'use server'
import PostModel from '../models/post'
import UserModel from '../models/user' // must be imported to populate user
import connectDb from '../config/database'

export async function getAllPosts(req, res) {
  try {
    await connectDb()
    const data = await PostModel.find().populate('user')
    return { data: JSON.parse(JSON.stringify(data)) }
  } catch (err) {
    return { errMsg: err.message }
  }
}
