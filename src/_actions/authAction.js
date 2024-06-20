'use server'
import PostModel from '../models/post'
import UserModel from '../models/user' // must be imported to populate user
import CommentModel from '../models/comment'
import connectDb from '../config/database'
import { headers, cookies } from 'next/headers'

import jwt from 'jsonwebtoken'
import { createToken, maxAge } from '../lib/authHelpers'
import { body, validationResult } from 'express-validator'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { verifyToken } from '../lib/authHelpers'

export async function isLoggedIn() {
  const token = cookies().get('jwt')
  if (!token) {
    return { isLogged: false, user: null }
  }
  const result = await verifyToken(token.value)
  return result
}

export async function login(prevState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  let user

  try {
    await connectDb()
    user = await UserModel.login(email, password)
  } catch (err) {
    console.log(err)
  }

  if (typeof user === 'string') {
    return { message: user }
  }
  const token = createToken(user._id)
  cookies().set('jwt', token)
  revalidatePath('/', 'layout')
  redirect('/')
  // return { message: 'Logged in successfully Notification' }
}

export async function logout() {
  cookies().set('jwt', '', { maxAge: 1 })
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(prevState, formData) {
  const req = {
    body: {
      username: formData.get('username'),
      email: formData.get('email'),
      // profilePic: formData.get('profilePic'),
      // for this to work we must make sure that we pass the correct name to our ImagePicker Compo
      // the image should be stored in the file system, while the src should be stored in the db
      password: formData.get('password'),
    },
  }

  const validationRules = [
    body('username').trim().isLength({ min: 5 }).withMessage('username must be at least 5 characters long').escape(),
    body('email', 'Invalid email').trim().isLength({ min: 1 }).isEmail(),
    body('password', 'Invalid password').trim().notEmpty(),
  ]

  await Promise.all(validationRules.map((validation) => validation.run(req)))

  const errors = validationResult(req)

  const user = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })

  let emailUsed
  try {
    await connectDb()
    emailUsed = await UserModel.findOne({ email: user.email })
  } catch (err) {
    return { message: 'Finding Email Failed' }
  }

  if (!errors.isEmpty()) {
    return { message: errors.errors[0].msg }
  }
  if (emailUsed !== null) {
    return { message: 'Email Already Registered' }
  }
  await user.save()
  const token = createToken(user._id)
  cookies().set('jwt', token)
  revalidatePath('/users', 'page')
  redirect('/')
}
