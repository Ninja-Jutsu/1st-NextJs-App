import styled from 'styled-components'
import classes from './UnstyledButton.module.css'


export default function UnstyledButton({ children }) {
  return <button className={classes.UnstyledButton}>{children}</button>
}


