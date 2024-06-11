import PostCard from '../components/HomePage/PostCard'
import classes from './page.module.css'
const DUMMY_POSTS = [
  {
    id: 1,
    title: 'Whereas recognition of the inherent dignity',
    desc: 'post main text1',
    user: 'Ismail Bardach',
    createdOn: '2022-03-12',
    comments: [1, 2, 3, 4],
    likes: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: 'post2',
    desc: 'post main text1',
    user: 'Hamza Bardach',
    createdOn: '2022-03-12',
    comments: [1, 2, 3, 4],
    likes: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    title: 'post3',
    desc: 'post main text1',
    user: 'Karim Bardach',
    createdOn: '2022-03-12',
    comments: [1, 2, 3, 4],
    likes: [1, 2, 3, 4, 5],
  },
]

const DUMMY_USER = {
  username: 'Ismail',
  userId: 10,
}

export default async function Home() {
  // Fetch all posts sorted by date
  const allPosts = DUMMY_POSTS
  const user = DUMMY_USER

  return (
    <main className={classes.mainSection}>
      <h1>News Feed</h1>
      {allPosts.map((post) => {
        return (
          <article key={post.id}>
            <PostCard
              user={user}
              post={post}
            />
          </article>
        )
      })}
    </main>
  )
}
