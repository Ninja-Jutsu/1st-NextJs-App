import React from 'react'
import { Menu } from 'react-feather'
import styled from 'styled-components'
import UnstyledButton from '../UnstyledButton/UnstyledButton'

function TopicsIcon() {
  return (
    <IconWrapper>
      <MenuButton>
        <Menu
          color='black'
          ProfileIcon
          strokeWidth={3}
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

export default TopicsIcon
