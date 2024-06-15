import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LikeBtn from './LikeBtn'
import CommentButton from '../../components/HomePage/CommentButton'

import RandomImage from '../../../public/images/atmosphere-8752835.png'
import classes from './PostCard.module.css'

function PostCard({ post }) {
  const { id, title, desc, comments, likes, user } = post
  const { _id, username } = user // user must be an object
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardHeader}>
        <div className={classes.userProfile}>
          <Link
            className={classes.userImageWrapper}
            href={`/users/${_id}`}
          >
            <Image
              src={RandomImage}
              alt={`an image of the user called${username}`}
              width={100}
              height={100}
            />
          </Link>
          <Link
            href={`users/${_id}`}
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
            width={500}
            height={500}
          />
        </div>
      </Link>
      <div className={classes.details}>
        <div className='likes'> {likes.length} likes</div>
        <div className={classes.CommentsCount}>{comments.length} comments</div>
      </div>

      <div className={classes.buttons}>
        <LikeBtn
          postId={id}
          userId={_id}
        />
        <CommentButton />
        <div className='spacer'></div>
      </div>
    </div>
  )
}

export default PostCard
