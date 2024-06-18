'use client'
import classes from './UnstyledButton.module.css'
import styled from 'styled-components'

export default function UnstyledButton({ onClick, children }) {
  return (
    <Button
      onClick={onClick}
      className={classes.UnstyledButton}
    >
      {children}
    </Button>
  )
}

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
  padding: 10px;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  & svg {
    display: block;
  }
`
