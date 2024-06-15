import React from 'react'
import Image from 'next/image'

import classes from './PageDetails.module.css'
import { formatDate } from '../../helpers/format'

import Ad from '../../components/Ad/Ad'
import randomImage from '../../../public/images/atmosphere-8752835.png'
import PlayBtn from '../../components/Posts/PlayBtn'
import ExtraBtns from '../../components/Posts/ExtraBtns'
import ActionsBtn from '../../components/Posts/ActionsBtn'
import Comment from '../../components/Posts/Comment'

const DUMMY_POST = {
  id: 1,
  title: 'Whereas recognition of the inherent dignity',
  desc: 'Far from Ukraine and Gaza, as the Group of 7 wealthy democracies gathers in Italy to discuss a range of old, entrenched challenges, the nature of American power is being transformed across the region that Washington sees as crucial for the century to come: the Asia-Pacific. Here, America no longer presents itself as the confident guarantor of security, a trust-us-we’ve-got-this superpower. The terrain is too vast, China’s rise too great a threat. So the United States has been offering to be something else — an eager teammate for military modernization and tech development.',
  user: 'Ismail Bardach',
  createdOn: '2022-03-12',
  comments: [
    {
      id: '664644d2ca0f90dbb053493c',
      text: 'very funny!',
      user: 'hamza',
      createdOn: '2024-05-14T03:27:00.219+00:00',
      likes: [1, 2, 3, 4],
    },
  ],
  likes: [1, 2, 3, 4, 5],
}

function PostDetailPage() {
  // fetch data for the provided postId
  const { title, desc, user, createdOn, comments, likes } = DUMMY_POST
  return (
    <div className={classes.Wrapper}>
      <Ad>--ADVERTISEMENT--</Ad>
      <article className={classes.PostContent}>
        <header className={classes.Header}>
          <h1>{title}</h1>
        </header>
        <div className={classes.Actions}>
          {/* todo */}
          <PlayBtn />
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
                key={createdOn}
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
