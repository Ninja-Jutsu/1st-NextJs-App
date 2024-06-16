import PostCard from '../components/HomePage/PostCard'
import classes from './HomePage.module.css'
import { formatDate } from '../helpers/format'
import { getAllPosts } from '../_actions/postAction'

export default async function HomePage() {
  const { allPosts } = await getAllPosts()
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
            <article key={post._id}>
              <PostCard post={post} />
            </article>
          )
        })}
      </main>
    </>
  )
}
