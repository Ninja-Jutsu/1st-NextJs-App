'use client'
import React from 'react'
import UnstyledButton from '../UnstyledButton/UnstyledButton'
import Icon from '../Icon/Icon'
import { useMenuOpenContext } from '../../context-providers/MenuOpenerProvider'

function TopicsIcon() {
  const { isOpen, setIsOpen } = useMenuOpenContext()

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
          id={'menu'}
          color='black'
          strokeWidth={3}
          size={24}
        />
      )}
    </UnstyledButton>
  )
}

export default TopicsIcon
