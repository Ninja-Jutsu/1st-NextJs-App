'use server'
import PostModel from '../models/post'
import connectDb from '../config/database'

export async function getPosts(req ,res) {
  
  try {
    await connectDb()
    const data = await PostModel.find()
    return { data: JSON.parse(JSON.stringify(data)) }
  } catch (err) {
    return { errMsg: err.message }
  }
}
