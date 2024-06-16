'use server'
import PostModel from '../models/post'
import UserModel from '../models/user' // must be imported to populate user
import CommentModel from '../models/comment'
import connectDb from '../config/database'

export async function getAllPosts() {
  try {
    const client = await connectDb()
    const allPosts = await PostModel.find().populate('user')
    return { allPosts: JSON.parse(JSON.stringify(allPosts)) }
  } catch (err) {
    return { errMsg: err.message }
  }
}

export async function getPostDetails(postId) {
  try {
    await connectDb()
    const post = await PostModel.findById(postId).populate('user').populate('comments').exec()

    const dateObj = new Date(post.createdOn)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }
    const formattedDate = dateObj.toLocaleDateString('en-US', options)
    if (!post) {
      return { errMsg: 'No such post' }
    }
    return { post: JSON.parse(JSON.stringify(post)), formattedDate: formattedDate }
  } catch (err) {
    return { errMsg: err.message }
  }
}
