// let server = require('../../index')
// there a problem with running the server like this
// the first time we run it, it will launch on port 5000, when relaunching the test
// it will run again on the same port 5000 which gives an error
// this is solved by starting server beforeEach and closing it afterEach
const mongoose = require('mongoose')
const request = require('supertest')
const Post = require('../../models/post')
const { createToken } = require('../../middleware/auth')
let server
let mockObjectId = '66362ff93cdf966e1404b663'
let token
let postObj
const exec = async () => {
  return await request(server).post('/api/posts/create').set('Cookie', `jwt=${token}`).send(postObj)
}

describe('/api/posts', () => {
  beforeEach(() => {
    server = require('../../index')
  })
  afterEach(async () => {
    server.close()
    token = createToken(mockObjectId)
    await Post.deleteMany({})
  })
  describe('GET /', () => {
    token = createToken(mockObjectId) // must be called for the first test
    it('should return all posts', async () => {
      await Post.collection.insertMany([
        { title: 'poste1', desc: 'describe1' },
        { title: 'poste2', desc: 'describe2' },
      ])

      const res = await request(server).get('/api/posts').set('Cookie', `jwt=${token}`)
      expect(res.status).toBe(200)
      expect(res.body.posts_list.length).toBe(2)
      expect(res.body.posts_list.some((post) => post.title === 'poste1')).toBeTruthy()
      expect(res.body.posts_list[0]).toHaveProperty('title', 'poste1')
    })
  })
  describe('GET /:id', () => {
    it('should return a post if valid id passed', async () => {
      const insertObj = await Post.collection.insertOne({ title: 'post1', desc: 'describe1' })
      const res = await request(server)
        .get('/api/posts/' + insertObj.insertedId)
        .set('Cookie', `jwt=${token}`)
      expect(res.status).toBe(200)
      expect(res.body.post).toHaveProperty('title', 'post1')
    })
    it('should return throw  if invalid id passed', async () => {
      const res = await request(server).get('/api/posts/1').set('Cookie', `jwt=${token}`)
      expect(res.status).toBe(404)
    })
  })
  describe('POST /', () => {
    it('should be created and return in the res if title & desc are longer than 2 chart', async () => {
      postObj = { title: '123', desc: '123', user: new mongoose.Types.ObjectId() }
      const res = await exec()
      const post = await Post.findOne({ title: '123' })
      expect(res.status).toBe(200) // no errors found
      expect(post).not.toBeNull() // post created
      expect(res.body.post).toHaveProperty('title', '123') // post return in res
    })
    it('should fail if title or desc are shorter than 2 chart', async () => {
      postObj = { title: '12', desc: '12', user: new mongoose.Types.ObjectId() }
      const res = await exec()
    })
    it('should fail if title is longer than 200', async () => {
      const longTitle = new Array(202).join('a')
      postObj = { title: longTitle, desc: '123456', user: new mongoose.Types.ObjectId() }
      const res = await exec()
      expect(res.status).toBe(400)
      expect(res.body.errors[0].msg).toBe('Title content must between 3 & 200 charts.')
    })
    it('should fail if desc is longer than 2500', async () => {
      const longDesc = new Array(2502).join('a')
      postObj = { title: '1234', desc: longDesc, user: new mongoose.Types.ObjectId() }
      const res = await exec()
      expect(res.status).toBe(400)
      expect(res.body.errors[0].msg).toBe('Post content must between 3 & 2500 charts.')
    })
  })
})
