'use client'
import React from 'react'
import UnstyledButton from './UnstyledButton'
import Icon from '../Icon/Icon'

function IconUnstyledBtn({ iconId, iconChildren, iconSize, children, onClick }) {
  return (
    <UnstyledButton onClick={onClick}>
      <Icon
        id={iconId}
        size={iconSize}
      >
        {iconChildren}
      </Icon>
      {children}
    </UnstyledButton>
  )
}

export default IconUnstyledBtn
