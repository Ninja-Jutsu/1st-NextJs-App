import React from 'react'
import { Users } from 'react-feather'
import styled from 'styled-components'
import UnstyledButton from '../UnstyledButton/UnstyledButton'

function ProfileIcon() {
  return (
    <IconWrapper>
      <MenuButton>
        <Users
          color='black'
          size={24}
        />
      </MenuButton>
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  display: block;
`

const MenuButton = styled(UnstyledButton)`
  padding: 10px;
  & svg {
    display: block;
  }
`

export default ProfileIcon
