import { body, validationResult } from 'express-validator'
import nextConnect from 'next-connect'

export const validationMiddleware = nextConnect()
  .use(
    // Define validation rules here using express-validator methods
    body('title')
      .trim()
      .isLength({ min: 3, max: 200 })
      .withMessage('Title content must between 3 & 200 charts.')
      .escape(),
    body('desc').trim().isLength({ min: 3, max: 2500 }).withMessage('Post content must between 3 & 2500 charts.')
  )
  .post((req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      // Handle successful validation (e.g., process form data)
      res.json({ message: 'Success!' })
    } else {
      // Handle validation errors (e.g., display error messages)
      res.status(400).json({ errors: errors.array() })
    }
  })
