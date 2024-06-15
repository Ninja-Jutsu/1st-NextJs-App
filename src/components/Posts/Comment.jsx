import React from 'react'
import classes from './Comment.module.css'
import { formatDate } from '../../helpers/format'

function Comment({ comment }) {
  const { text, createdOn, likes } = comment
  return (
    <div className={classes.CommentWrapper}>
      <h3>{text}</h3>
      <div className={classes.CommentDetails}>
        <time>{formatDate(createdOn)}</time>
        <p>{likes.length} likes</p>
      </div>
    </div>
  )
}

export default Comment
