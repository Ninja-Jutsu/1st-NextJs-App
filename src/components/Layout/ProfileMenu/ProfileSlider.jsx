'use client'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useProfileOpenerContext } from '../../../context-providers/ProfileOpenerProvider'

import UnstyledButton from '../../UnstyledButton/UnstyledButton'

function ProfileSlider() {
  const { isOpen } = useProfileOpenerContext()

  return (
    <Wrapper isOpen={isOpen}>
      <UnstyledButton>
        <Link href='/auth'>Login</Link>
      </UnstyledButton>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  width: ${(props) => (props.isOpen ? '100%' : '0px')};
  transform: ${(props) => (props.isOpen ? 'translateX(0%)' : 'translateX(100%)')};
  border-left: ${(props) => (props.isOpen ? 'solid black' : 'none')};
  background-color: hsl(0, 0%, 90%);
  /* Hide Text Letters when the size of the container is 0px */
  overflow: hidden;
  transition: transform 100ms ease-in, width 110ms ease-in;

  & a {
    display: block;
    font-size: 2rem;
    align-self: flex-start;
    color: red;
    transform: ${(props) => (props.isOpen ? 'translateX(0%)' : 'translateX(110%)')};
    transition: transform 200ms ease-in-out;
  }

  & a:hover {
    text-decoration: underline;
    transform: scale(1.05);
  }
`

export default ProfileSlider
