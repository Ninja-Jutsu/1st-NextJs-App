'use server'
import PostModel from '../models/post'
import UserModel from '../models/user'
import CommentModel from '../models/comment'
import connectDb from '../config/database'

export async function getAllUsers() {
  try {
    const client = await connectDb()
    const data = await UserModel.find()

    if (!data) {
      return { errMsg: "Couldn't fetch data!" }
    }
    return { allUsers: JSON.parse(JSON.stringify(data)) }
  } catch (err) {
    return { errMsg: err.message }
  }
}

export async function getPostsByUser({ userId }) {
  try {
    const client = await connectDb()
    const data = await PostModel.find({ user: userId })

    if (!data) {
      return { errMsg: "Couldn't fetch data!" }
    }
    return { user: JSON.parse(JSON.stringify(data)) }
  } catch (err) {
    return { errMsg: err.message }
  }
}
