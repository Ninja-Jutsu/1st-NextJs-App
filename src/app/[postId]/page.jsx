import React from 'react'
import Icon from '../../components/Icon/Icon'
import classes from './PageDetails.module.css'
import UnstyledButton from '../../components/UnstyledButton/UnstyledButton'
import Link from 'next/link'
import Image from 'next/image'
import randomImage from '../../../public/images/atmosphere-8752835.png'
import Ad from '../../components/Ad/Ad'

const DUMMY_POST = {
  id: 1,
  title: 'Whereas recognition of the inherent dignity',
  desc: 'Far from Ukraine and Gaza, as the Group of 7 wealthy democracies gathers in Italy to discuss a range of old, entrenched challenges, the nature of American power is being transformed across the region that Washington sees as crucial for the century to come: the Asia-Pacific. Here, America no longer presents itself as the confident guarantor of security, a trust-us-we’ve-got-this superpower. The terrain is too vast, China’s rise too great a threat. So the United States has been offering to be something else — an eager teammate for military modernization and tech development.',
  user: 'Ismail Bardach',
  createdOn: '2022-03-12',
  comments: [1, 2, 3, 4],
  likes: [1, 2, 3, 4, 5],
}

function PostDetailPage() {
  // fetch data for the provided postId
  const { title, desc, user, createdOn, comments, likes } = DUMMY_POST
  // TODO
  function handlePLay() {}
  function handleShare() {}
  function handleFavorite() {}
  return (
    <div className={classes.Wrapper}>
      <Ad>--ADVERTISEMENT--</Ad>
      <article className={classes.PostContent}>
        <header className={classes.Header}>
          <h1>{title}</h1>
        </header>
        <div className={classes.Actions}>
          <div className={classes.PlayBtnWrapper}>
            <UnstyledButton onClick={handlePLay}>
              <Icon
                id={'play'}
                size={24}
              />
            </UnstyledButton>
            <p>
              Listen to this post <Link href='/not-available'>Learn more</Link>
            </p>
          </div>
          <div className='Extras'>
            <UnstyledButton onClick={handleFavorite}>
              <Icon
                id={'favorite'}
                size={24}
              />
            </UnstyledButton>

            <UnstyledButton onClick={handleShare}>
              <Icon
                id={'share'}
                size={24}
              />
            </UnstyledButton>
          </div>
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
      </article>
      <Ad>--ADVERTISEMENT--</Ad>
    </div>
  )
}

export default PostDetailPage
