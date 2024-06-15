'use client'
import classes from './UnstyledButton.module.css'

export default function UnstyledButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={classes.UnstyledButton}
    >
      {children}
    </button>
  )
}
