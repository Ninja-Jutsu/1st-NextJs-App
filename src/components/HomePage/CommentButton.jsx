'use client'
import React from 'react'
import Icon from '../Icon/Icon'
import UnstyledButton from '../Buttons/UnstyledButton'

function CommentButton({ children }) {
  function handleClick() {
    // Create an action that:
    // verifies if the current user has already liked the post
    // return a boolean
  }
  return (
    <UnstyledButton
      type='button'
      className={`like-btn`}
      onClick={handleClick}
    >
      <Icon
        id={'comment'}
        size={20}
      >
        Comment
      </Icon>
    </UnstyledButton>
  )
}

export default CommentButton
