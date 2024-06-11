import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LikeBtn from './LikeBtn'
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
        <p>{desc}</p>
        <Image
          src={RandomImage}
          alt={`an image of the user called${username}`}
          width={100}
          height={100}
        />
      </Link>
      <div className={classes.reactions}>
        <div className='comments'>{comments.length} comments...</div>
        <div className='likes'> {likes.length} likes...</div>
        <LikeBtn
          postId={id}
          userId={userId}
        />
      </div>
    </div>
  )
}

export default PostCard
