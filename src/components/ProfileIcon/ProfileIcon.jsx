'use client'

import React from 'react'
import UnstyledButton from '../Buttons/UnstyledButton'
import Icon from '../Icon/Icon'
import { useProfileOpenerContext } from '../../context-providers/ProfileOpenerProvider'

function ProfileIcon() {
  const { isOpen, setIsOpen } = useProfileOpenerContext()

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <UnstyledButton onClick={handleClick}>
      {isOpen && (
        <Icon
          id={'close'}
          color='black'
          strokeWidth={3}
          size={24}
        />
      )}
      {!isOpen && (
        <Icon
          id={'users'}
          size={24}
          color={'black'}
        />
      )}
    </UnstyledButton>
  )
}

export default ProfileIcon
