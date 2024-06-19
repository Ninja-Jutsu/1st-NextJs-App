'use client'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useMenuOpenContext } from '../../../context-providers/MenuOpenerProvider'

function MainMenuModel() {
  const { isOpen } = useMenuOpenContext()
  return (
    <Wrapper open={isOpen}>
      <Link href='/posts'>All posts</Link>
      <Link href='/posts'>Latest posts</Link>
      <Link href='/posts'>Most liked posts</Link>
      <Link href='/posts'>Most liked by you</Link>
      <Link href='/posts'>About us</Link>
      <Link href='/posts'>Profile settings</Link>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: max-content;
  max-width: 20%;
  padding: ${(props) => (props.open ? '1rem' : '0px')};
  width: ${(props) => (props.open ? '100%' : '0px')};
  border-right: ${(props) => (props.open ? 'solid black' : 'none')};
  background-color: hsl(0, 0%, 90%);
  /* Hide Text Letters when the size of the container is 0px */
  overflow: hidden;
  transition: width 200ms;

  & a {
    font-size: 2rem;
    align-self: flex-start;
  }

  & a:hover {
    text-decoration: underline;
    transform: scale(1.05);
  }
`

export default MainMenuModel
