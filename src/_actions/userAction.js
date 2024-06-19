'use server'
import PostModel from '../models/post'
import UserModel from '../models/user'
import CommentModel from '../models/comment'
import connectDb from '../config/database'

export async function getAllUsers() {
  try {
    await connectDb()
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
    await connectDb()
    const data = await PostModel.find({ user: userId })

    if (!data) {
      return { errMsg: "Couldn't fetch data!" }
    }
    return { user: JSON.parse(JSON.stringify(data)) }
  } catch (err) {
    return { errMsg: err.message }
  }
}

export async function getUserDetails({ userId }) {
  // console.log((req.params.id))
  const [user, allPostsByUser] = await Promise.all([
    UserModel.findById(userId).populate('posts').exec(),
    PostModel.find({ user: userId }, 'title desc').exec(),
  ])
  if (!user) {
    return { message: 'User not found!' }
  }
  return { user: JSON.parse(JSON.stringify({ user, posts: allPostsByUser })) }
}
