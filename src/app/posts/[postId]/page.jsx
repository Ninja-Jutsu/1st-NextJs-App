import React from 'react'
import Image from 'next/image'

import classes from './PageDetails.module.css'

import Ad from '../../../components/Ad/Ad'
import randomImage from '../../../../public/images/atmosphere-8752835.png'
import ExtraBtns from '../../../components/Posts/ExtraBtns'
import ActionsBtn from '../../../components/Posts/ActionsBtn'
import UserInfo from '../../../components/Users/UserInfo'
import Comment from '../../../components/Posts/Comment'
import { getPostDetails } from '../../../_actions/postAction'

async function PostDetailPage({ params }) {
  // fetch data for the provided postId
  const data = await getPostDetails(params.postId)
  const { title, desc, user, createdOn, comments, likes } = data.post
  return (
    <div className={classes.Wrapper}>
      <Ad>--ADVERTISEMENT--</Ad>
      <article className={classes.PostContent}>
        <header className={classes.Header}>
          <h1>{title}</h1>
          <p>{data.formattedDate}</p>
        </header>
        <div className={classes.Actions}>
          {/* todo */}
          <UserInfo user={user} />
          <ExtraBtns />
        </div>
        <div className={classes.ImageWrapper}>
          <Image
            src={randomImage}
            alt={title}
            width={700}
            height={700}
          />
          <p>Image description</p>
        </div>
        <main className={classes.MainText}>
          <p>{desc}</p>
        </main>
        <ActionsBtn />
        <div>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment._id}
                comment={comment}
              />
            )
          })}
        </div>
      </article>
      <Ad>--ADVERTISEMENT--</Ad>
    </div>
  )
}

export default PostDetailPage
