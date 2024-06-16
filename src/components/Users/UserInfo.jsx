import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classes from './UserInfo.module.css'

import RandomImage from '../../../public/images/atmosphere-8752835.png'

function UserInfo({ user }) {
  return (
    <div className={classes.userProfile}>
      <Link
        className={classes.userImageWrapper}
        href={`/users/${user._id}`}
      >
        <Image
          src={RandomImage}
          alt={`an image of the user called${user.username}`}
          width={100}
          height={100}
        />
      </Link>
      <Link
        href={`users/${user._id}`}
        className={classes.userName}
      >
        <p>{user.username}</p>
      </Link>
    </div>
  )
}

export default UserInfo
