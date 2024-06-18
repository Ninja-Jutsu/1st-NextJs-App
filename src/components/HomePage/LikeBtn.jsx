'use client'
import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'
import UnstyledButton from '../Buttons/UnstyledButton'

function LikeBtn({ postId, userId, children }) {
  const [isLiked, setIsLiked] = React.useState(false)

  function handleClick() {
    // Create an action that:
    // verifies if the current user has already liked the post
    // return a boolean
  }
  return (
    <UnstyledButton
      type='button'
      onClick={handleClick}
    >
      <Icon
        id={'heart'}
        size={20}
        color={isLiked ? 'red' : 'black'}
      >
        Like
      </Icon>
    </UnstyledButton>
  )
}

export default LikeBtn
