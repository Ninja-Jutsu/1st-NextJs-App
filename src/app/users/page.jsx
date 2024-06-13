import React from 'react'
import classes from './Users.module.css'
import randomImage from '../../../public/images/atmosphere-8752835.png'
import Image from 'next/image'
import { formatDate } from '../../helpers/format'
import Link from 'next/link'

const DUMMY_USERS = [
  {
    id: 1,
    username: 'Ismail',
    joined: '2023-06-03',
    posts: [1, 2, 3],
    profilePicture: randomImage,
  },
  {
    id: 2,
    username: 'Ismail',
    joined: '2023-06-03',
    posts: [1, 2, 3],
    profilePicture: randomImage,
  },
]

function AllUsersPage() {
  // Fetch all users
  DUMMY_USERS[0].joined = formatDate(DUMMY_USERS[0].joined)
  DUMMY_USERS[1].joined = formatDate(DUMMY_USERS[1].joined)

  return (
    <div className={classes.Wrapper}>
      {DUMMY_USERS.map((user) => {
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
                - Joined on: <span>{user.joined}</span>
              </p>
              <p>
                - number of posts <span>{user.posts.length}</span>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllUsersPage
