'use client'
import React from 'react'
import UnstyledButton from '../../components/UnstyledButton/UnstyledButton'
import classes from './ActionBtn.module.css'

function ActionsBtn() {
  function handleLike() {}
  function handleComment() {}
  return (
    <>
      <div className={classes.Buttons}>
        <UnstyledButton onClick={handleLike}>Like</UnstyledButton>
        <UnstyledButton onClick={handleComment}>Add Comment</UnstyledButton>
      </div>
    </>
  )
}

export default ActionsBtn
