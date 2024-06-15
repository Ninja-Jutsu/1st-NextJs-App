'use client'
import React from 'react'
import Link from 'next/link'

import classes from './PlayBtn.module.css'
import IconUnstyledBtn from '../UnstyledButton/IconUnstyledBtn'

function PlayBtn({data}) {
  function handlePlay() {}
  return (
    <div className={classes.PlayBtnWrapper}>
      <IconUnstyledBtn
        onClick={handlePlay}
        iconId={'play'}
        iconSize={24}
      />
      <p>
        Listen to this post <Link href='/not-available'>Learn more</Link>
      </p>
    </div>
  )
}

export default PlayBtn
