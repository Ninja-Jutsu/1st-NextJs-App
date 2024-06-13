import React from 'react'
import UnstyledButton from '../UnstyledButton/UnstyledButton'
import Icon from '../Icon/Icon'

function TopicsIcon() {
  // HANDLE CLICK
  function handleClick() {}
  return (
    <UnstyledButton onClick={handleClick}>
      <Icon
        id={'menu'}
        color='black'
        strokeWidth={3}
        size={24}
      />
    </UnstyledButton>
  )
}

export default TopicsIcon
