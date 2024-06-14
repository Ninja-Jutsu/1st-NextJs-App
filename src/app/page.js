import PostCard from '../components/HomePage/PostCard'
import classes from './HomePage.module.css'
import { formatDate } from '../helpers/format'
const DUMMY_POSTS = [
  {
    id: 1,
    title: 'Whereas recognition of the inherent dignity',
    desc: 'Whereas recognition of the inherent dignity Whereas recognition of the inherent dignity ',
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
    formatDate,
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

export default async function HomePage() {
  // Fetch all posts sorted by date
  const allPosts = DUMMY_POSTS
  const user = DUMMY_USER
  const date = new Date('2024-03-02')
  const formattedDate = formatDate('2024-12-25')
  return (
    <>
      <div className={classes.subHeader}>
        <div className='spacer'></div>
        <p>{formattedDate}</p>
        <h1>Subscribe for 0.5$/month</h1>
      </div>
      <main className={classes.mainSection}>
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
    </>
  )
}
