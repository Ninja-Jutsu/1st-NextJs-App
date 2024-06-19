const jwt = require('jsonwebtoken')

export const maxAge = 3 * 24 * 60 * 60
export const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: maxAge })
  return token // 1st arg is the payload , 2nd is secret, 3rd is valid for how long?
}
