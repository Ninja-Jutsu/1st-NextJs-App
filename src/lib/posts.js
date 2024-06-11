import { connectToDataBase } from './db'

export async function getPosts() {
  const client = await connectToDataBase()

  const postsCollection = client.db().collection('posts')

  const allPosts = await postsCollection.find()

  if (!allPosts) {
    // res.status(401).json({ message: 'Posts not found' })
    client.close()
    return { message: 'data not found' }
  }
  client.close()
  return { message: 'data stored', posts: allPosts }
  //   res.status(200).json({ message: 'Posts not found' })
}
