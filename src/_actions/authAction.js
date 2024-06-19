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

export async function getCurrentUser(jwtToken) {
  const token = jwtToken
  await connectDb()
  if (token !== null) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        return { message: 'not verified' }
      } else {
        console.log('verified')
        UserModel.findById(decodedToken.id)
          .then((user) => {
            return { user: JSON.parse(JSON.stringify(user)) }
          })
          .catch((err) => {
            console.log(err)
            return { message: 'Something went wrong!' }
          })
      }
    })
  } else {
    return { message: 'Token not found' }
  }
}

export async function isLoggedIn(jwtToken) {
  await connectDb()

  const token = cookies().get('jwt')
  console.log(token)
  if (token !== null) {
    return false
  }
}

export async function login(prevState, formData) {
  await connectDb()

  const email = formData.get('email')
  const password = formData.get('password')

  const user = await UserModel.login(email, password)
  if (typeof user !== 'string') {
    const token = createToken(user._id)
    cookies().set('jwt', token)
    return { message: 'Cookies Set!' }
  } else {
    return { message: user }
  }
}

export async function logout() {
  cookies().set('jwt', '', { maxAge: 1 })

  return { message: 'Logged-out successfully' }
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
    console.log('email already used')
    return { message: 'Email Already Registered' }
  }
  await user.save()
  const token = createToken(user._id)
  cookies().set('jwt', token)
  revalidatePath('/users', 'page')
  redirect('/')
}
