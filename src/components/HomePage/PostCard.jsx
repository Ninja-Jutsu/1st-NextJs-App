import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LikeBtn from './LikeBtn'
import CommentButton from '../../components/HomePage/CommentButton'

import RandomImage from '../../../public/images/atmosphere-8752835.png'
import classes from './PostCard.module.css'

function PostCard({ post, user }) {
  const { id, title, desc, date, comments, likes } = post
  const { userId, username } = user // user must be an object
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardHeader}>
        <div className={classes.userProfile}>
          <Link
            className={classes.userImageWrapper}
            href={`/api/${userId}`}
          >
            <Image
              src={RandomImage}
              alt={`an image of the user called${username}`}
              width={100}
              height={100}
            />
          </Link>
          <Link
            href={`users/${userId}`}
            className={classes.userName}
          >
            <p>{username}</p>
          </Link>
        </div>
        <Link
          href={`/posts/${id}`}
          className={classes.title}
        >
          <p>{title}</p>
        </Link>
      </div>
      <Link
        className={classes.postBody}
        href={`/posts/${id}`}
      >
        <div className={classes.textContent}>
          <p>{desc}</p>
        </div>
        <div className={classes.mainImageWrapper}>
          <Image
            src={RandomImage}
            alt={`an image of the user called${username}`}
            width={200}
            height={200}
          />
        </div>
      </Link>
      <div className={classes.details}>
        <div className='likes'> {likes.length} likes...</div>
        <div className='comments'>{comments.length} comments...</div>
      </div>

      <div className={classes.buttons}>
        <LikeBtn
          postId={id}
          userId={userId}
        />
        <CommentButton />
        <div className='spacer'></div>
      </div>
    </div>
  )
}

export default PostCard
