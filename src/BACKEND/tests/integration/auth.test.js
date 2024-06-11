const request = require('supertest')
const { createToken } = require('../../middleware/auth')
const Post = require('../../models/post')

const User = require('../../models/user')

let server
let mockObjectId = '66362ff93cdf966e1404b663'
let token
let user
describe('auth middleware', () => {
  beforeEach(async () => {
    server = require('../../index')
    user = await User.collection.insertOne({ username: 'ismail', email: 'ismail@gmail.com', password: 123456 })
  })
  afterEach(async () => {
    token = createToken(mockObjectId) // happy path token
    await Post.deleteMany({})
    await User.deleteMany({})
    server.close()
  }) 
  it('should return 401 if no token provided', async () => {
    const res = await request(server).get('/api/posts')
    expect(res.status).toBe(401)
    expect(res.body.err).toBe('not logged in')
  }) 
  it('should return 200 if valid token provided', async () => {
    token = createToken(user.insertedId) 
    const res = await request(server).get('/api/posts').set('Cookie', `jwt=${token}`)
    expect(res.status).toBe(200)
    expect(res.body.user).toHaveProperty('username', 'ismail')
  })
  it('should return 401 if invalid token provided', async () => {
    token = 'invalid'
    const res = await request(server).get('/api/posts').set('Cookie', `jwt=${token}`)
    expect(res.status).toBe(401)
    expect(res.body.err).toBe('not logged in')
  })
})
