import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LikeBtn from './LikeBtn'
import CommentButton from '../../components/HomePage/CommentButton'
import UserInfo from '../Users/UserInfo'

import RandomImage from '../../../public/images/atmosphere-8752835.png'
import classes from './PostCard.module.css'

function PostCard({ post }) {
  const { _id, title, desc, comments, likes, user } = post
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardHeader}>
        <UserInfo user={user} />
        <Link
          href={`/posts/${_id}`}
          className={classes.title}
        >
          <p>{title}</p>
        </Link>
      </div>
      <Link
        className={classes.postBody}
        href={`/posts/${_id}`}
      >
        <div className={classes.textContent}>
          <p>{desc}</p>
        </div>
        <div className={classes.mainImageWrapper}>
          <Image
            src={RandomImage}
            alt={`an image of the user called${user.username}`}
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
          postId={_id}
          userId={user._id}
        />
        <CommentButton />
        <div className='spacer'></div>
      </div>
    </div>
  )
}

export default PostCard
