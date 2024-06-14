import React from 'react'
import Image from 'next/image'
import classes from './UserDetailsPage.module.css'
import UnstyledButton from '../../../components/UnstyledButton/UnstyledButton'
import { formatDate } from '../../../helpers/format'
import { DUMMY_USER } from '../../../helpers/DUMMY_USER'

function UserDetailsPage() {
  // fetch the specific user using his id
  // use his details to populate this page
  const { id, username, posts, profilePicture } = DUMMY_USER
  return (
    <div className={classes.Wrapper}>
      <header className={classes.Header}>
        <div className={classes.ImageWrapper}>
          <Image
            src={profilePicture}
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
                  <p>{desc}</p>
                  <div className={classes.PostDetails}>
                    <time>{formatDate(createdOn)}</time>
                    <p>{likes.length} likes</p>
                    <p>{comments.length} comments</p>
                  </div>
                </main>
              </div>
              <div className={classes.Buttons}>
                <UnstyledButton>Like</UnstyledButton>
                <UnstyledButton>Add Comment</UnstyledButton>
              </div>
              <div>
                {comments.map((comment) => {
                  return (
                    <div
                      key={id}
                      className={classes.CommentWrapper}
                    >
                      <h3>{comment.text}</h3>
                      <div className={classes.CommentDetails}>
                        <p>{comment.createdOn}</p>
                        <p>{comment.likes.length} likes</p>
                      </div>
                    </div>
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
