// 'use client'
import React from 'react'
import Link from 'next/link'
import classes from './Header.module.css'

import TopicsIcon from '../TopicsIcon/TopicsIcon'
import ProfileIcon from '../ProfileIcon/ProfileIcon'


// TODO: fetch topics and pass then here
function Header({ topics }) {

  return (
    <div className={classes.Wrapper}>
      <TopicsIcon />
      <div className={classes.LogoWrapper}>
        <div className={classes.staticLinkWrapper}>
          <Link href='/'>The Wisdom Times</Link>
        </div>
        <div className={classes.positionedLinkWrapper}>
          <Link href='/'>The 7ikma Times</Link>
        </div>
      </div>
      <ProfileIcon />
    </div>
  )
}

export default Header
