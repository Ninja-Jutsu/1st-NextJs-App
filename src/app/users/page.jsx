import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import classes from './Users.module.css'

import { formatDate } from '../../helpers/format'
import { getAllUsers, getPostsByUser } from '../../_actions/userAction'
import randomImage from '../../../public/images/atmosphere-8752835.png'

async function AllUsersPage() {
  // Fetch all users

  const { allUsers } = await getAllUsers()

  return (
    <div className={classes.Wrapper}>
      {allUsers.map((user) => {
        return (
          <div
            key={user.id}
            className={classes.UserWrapper}
          >
            <Link
              className={classes.ImageWrapper}
              href={`users/${user.id}`}
            >
              <Image
                src={randomImage}
                alt={`${user.username}'s photo`}
                width={150}
                height={150}
              />
            </Link>
            <div className={classes.UserDetails}>
              <Link href={`users/${user.id}`}>- {user.username}</Link>

              <p>
                Number of posts: <span>{user.posts.length}</span>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllUsersPage
