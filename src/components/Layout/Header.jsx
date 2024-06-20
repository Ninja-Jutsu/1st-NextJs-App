import Link from 'next/link'
import classes from './Header.module.css'

import TopicsIcon from '../TopicsIcon/TopicsIcon'
import ProfileIcon from '../ProfileIcon/ProfileIcon'

import { isLoggedIn } from '../../_actions/authAction'

import Context from '../HomePage/Context'

// TODO: fetch topics and pass then here
async function Header({ topics }) {
  const { user, isLogged } = await isLoggedIn()

  return (
    <div className={classes.Wrapper}>
      {user && <Context userId={user._id} />}
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
