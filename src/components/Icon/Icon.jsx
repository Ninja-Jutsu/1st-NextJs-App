'use client'
import React, { Children } from 'react'
import styled from 'styled-components'
import { Share2, Play, Users, Menu, Heart, ChevronDown, X, MessageSquare, Star } from 'react-feather'

const icons = {
  heart: Heart,
  menu: Menu,
  users: Users,
  'chevron-down': ChevronDown,
  close: X,
  comment: MessageSquare,
  favorite: Star,
  play: Play,
  share: Share2,
}

let Component
const Icon = ({ id, color, size, strokeWidth, children, ...delegated }) => {
  Component = icons[id]
  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`)
  }

  return (
    <Wrapper
      strokeWidth={strokeWidth}
      {...delegated}
    >
      <Component
        color={color}
        size={size}
      />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  & > svg {
    display: block;
    stroke-width: ${(p) => (p.strokeWidth !== undefined ? p.strokeWidth + 'px' : undefined)};
    &:hover ${Component} {
      transform: scale(1.05);
    }
  }
`

export default Icon
