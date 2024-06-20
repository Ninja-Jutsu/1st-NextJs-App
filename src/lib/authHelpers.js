import jwt from 'jsonwebtoken'
import UserModel from '../models/user'
import connectDb from '../config/database'
import { cookies } from 'next/headers'

export const maxAge = 3 * 24 * 60 * 60
export const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: maxAge })
  return token // 1st arg is the payload , 2nd is secret, 3rd is valid for how long?
}

export const verifyToken = async (tokenValue) => {
  const result = jwt.verify(tokenValue, process.env.SECRET, async (err, decodedToken) => {
    if (err) {
      return { isLogged: false, user: null }
    }
    await connectDb()
    let user = await UserModel.findById(decodedToken.id)
    return { isLogged: true, user }
  })

  return await result
}
