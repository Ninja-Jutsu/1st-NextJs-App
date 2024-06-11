'use client'
import React from 'react'
// import heartIcon from '../../../../public/icons/heart.svg'
import { Heart } from 'react-feather'
import styled from 'styled-components'

function LikeBtn({ postId, userId }) {
  const [isLiked, setIsLiked] = React.useState(false)

  function handleClick() {
    // Create an action that:
    // verifies if the current user has already liked the post
    // return a boolean
  }
  return (
    <UnstyledBtn
      type='button'
      className={`like-btn`}
      onClick={handleClick}
    >
      <div className='icon-wrapper'>
        <Heart color={isLiked ? 'red' : 'black'} />
      </div>
    </UnstyledBtn>
  )
}

const UnstyledBtn = styled.button`
  display: ${(props) => props.display || 'block'};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`

export default LikeBtn
