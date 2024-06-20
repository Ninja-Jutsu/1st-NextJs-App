import Image from 'next/image'

// CSS
import classes from './UserDetailsPage.module.css'

// Components
import Comment from '../../../components/Posts/Comment'
import ActionBtn from '../../../components/Posts/ActionsBtn'
import ProfilePic from '../../../../public/images/atmosphere-8752835.png'

// Helpers
import { formatDate } from '../../../helpers/format'

// Actions:
import { isLoggedIn } from '../../../_actions/authAction'
import { getAllPostForUser } from '../../../_actions/postAction'

async function UserDetailsPage() {
  const { user, isLogged } = await isLoggedIn()
  const { posts } = await getAllPostForUser(user._id)

  // console.log(posts)
  // console.log(user)

  const { _id, username } = user
  return (
    <div className={classes.Wrapper}>
      <header className={classes.Header}>
        <div className={classes.ImageWrapper}>
          <Image
            src={ProfilePic}
            alt='user profile image'
            width={400}
            height={400}
          />
        </div>
        <div className={classes.Metadata}>
          <h2>{username}</h2>
          <h3>{posts.length} posts</h3>
        </div>
      </header>

      <main className={classes.MainContent}>
        {posts.map(({ id, title, desc, createdOn, comments, likes }) => {
          return (
            <div
              key={id}
              className={classes.ContentWrapper}
            >
              <div className={classes.PostWrapper}>
                <header>
                  <h1>{title}</h1>
                </header>
                <main>
                  <div className={classes.PostContent}>
                    <div className={classes.PostImageWrapper}>
                      <Image
                        src={ProfilePic}
                        alt='Post Image'
                        width={400}
                        height={400}
                      />
                    </div>
                    <p>{desc}</p>
                  </div>
                  <div className={classes.PostDetails}>
                    <time>{formatDate(createdOn)}</time>
                    <p>{likes.length} likes</p>
                    <p>{comments.length} comments</p>
                  </div>
                </main>
              </div>
              <ActionBtn />
              <div>
                {comments.map((comment) => {
                  return (
                    <Comment
                      key={createdOn}
                      comment={comment}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default UserDetailsPage
