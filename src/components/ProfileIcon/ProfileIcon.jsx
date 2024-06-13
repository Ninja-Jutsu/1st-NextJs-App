import React from 'react'
// import { Users } from 'react-feather'
import styled from 'styled-components'
import UnstyledButton from '../UnstyledButton/UnstyledButton'
import Icon from '../Icon/Icon'

function ProfileIcon() {
  // HANDLE CLICK
  function handleClick() {}

  return (
    <UnstyledButton onClick={handleClick}>
      <Icon
        id={'users'}
        size={24}
        color={'black'}
      />
    </UnstyledButton>
  )
}

export default ProfileIcon
