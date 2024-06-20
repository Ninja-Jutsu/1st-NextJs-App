/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useProfileOpenerContext } from '../../../context-providers/ProfileOpenerProvider'
import { useUserLoggedInContext } from '../../../context-providers/UserLoggedInProvider'

import { logout } from '../../../_actions/authAction'
import UnstyledButton from '../../Buttons/UnstyledButton'

function ProfileSlider({ session }) {
  const { isOpen, setIsOpen } = useProfileOpenerContext()
  const { isLoggedIn, setIsLoggedIn } = useUserLoggedInContext()

  React.useEffect(() => {
    if (session) {
      setIsLoggedIn(true)
    }
  }, [session])

  async function handleLogout() {
    await logout()
    setIsLoggedIn(false)
    setIsOpen(false)
  }
  // console.log(session) // {name: jwt, value: 'jwt value'}

  return (
    <Wrapper open={isOpen}>
      {!isLoggedIn && (
        <UnstyledButton
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <Link href='/users/auth'>Login</Link>
        </UnstyledButton>
      )}

      {isLoggedIn && (
        <UnstyledButton
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <Link href='/users/userId'>Profile</Link>
        </UnstyledButton>
      )}
      {isLoggedIn && <UnstyledButton onClick={handleLogout}>Logout</UnstyledButton>}
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  /* padding: 1rem; */
  max-width: 10%;
  width: ${(props) => (props.open ? '100%' : '0px')};
  transform: ${(props) => (props.open ? 'translateX(0%)' : 'translateX(100%)')};
  border-left: ${(props) => (props.open ? 'solid black' : 'none')};
  background-color: hsl(0, 0%, 90%);
  /* Hide Text Letters when the size of the container is 0px */
  overflow: hidden;
  transition: transform 100ms ease-in, width 110ms ease-in;

  & a {
    display: block;
    font-size: 2rem;
    align-self: flex-start;
    color: red;
    transform: ${(props) => (props.open ? 'translateX(0%)' : 'translateX(110%)')};
    transition: transform 200ms ease-in-out;
  }

  & a:hover {
    text-decoration: underline;
    transform: scale(1.05);
  }
`

export default ProfileSlider
