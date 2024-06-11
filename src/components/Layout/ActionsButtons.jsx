'use client'
import React from 'react'

import UnstyledButton from '../UnstyledButton/UnstyledButton'
import styled from 'styled-components'
import { COLORS, WEIGHTS } from '../../helpers/constants'

export default function ActionButtons() {
  const [isOpen, setIsOpen] = React.useState(false)
  function handleLogin() {
    // let's show a model
  }
  function handleLogout() {
    // clear the cookies if any
  }
  return (
    <>
      <ButtonWrapper>
        <UnstyledButton onClick={handleLogin}>Login</UnstyledButton>
        <PositionedButton onClick={handleLogin}>Login</PositionedButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <UnstyledButton onClick={handleLogout}>Logout</UnstyledButton>
        <PositionedButton onClick={handleLogout}>Logout</PositionedButton>
      </ButtonWrapper>
    </>
  )
}


const PositionedButton = styled(UnstyledButton)`
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  color: hsl(${COLORS.alert});
  transition: clip-path 600ms;
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: min(10px, 2vw);
  position: relative;
  font-weight: ${WEIGHTS.bold};

  &:hover ${PositionedButton} {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 250ms;
  }
`
