import React from 'react'
import classes from './Ad.module.css'

export default function Ad({ children }) {
  return (
    <div className={classes.Ad}>
      <span>{children}</span>
    </div>
  )
}
