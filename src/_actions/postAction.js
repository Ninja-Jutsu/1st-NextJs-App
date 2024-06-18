'use server'
import PostModel from '../models/post'
import UserModel from '../models/user' // must be imported to populate user
import CommentModel from '../models/comment'
import connectDb from '../config/database'
import { body, validationResult } from 'express-validator'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function getAllPosts() {
  try {
    await connectDb()
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

export async function sharePost(prevState, formData) {
  await connectDb()

  const post = {
    title: formData.get('title'),
    desc: formData.get('desc'),
    image: formData.get('image'),
    // for this to work we must make sure that we pass the correct name to our ImagePicker Compo
    // the image should be stored in the file system, while the src should be stored in the db
    user: formData.get('user'),
  }
  let errors
  body('title')
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage('Title content must between 3 & 200 charts.')
    .escape(),
    body('desc').trim().isLength({ min: 3, max: 2500 }).withMessage('Post content must between 3 & 2500 charts.')

  errors = validationResult(post)
  const validatedPost = new PostModel({
    title: post.title.replace(/&#x27;/g, "'"),
    desc: post.desc.replace(/&#x27;/g, "'"),
    user: post.user,
  })

  if (errors.array().length > 0) {
    return { message: 'SOMETHING WRONG' }
  }
  await validatedPost.save()

  revalidatePath('/posts', 'page')
  redirect('/posts')
}
