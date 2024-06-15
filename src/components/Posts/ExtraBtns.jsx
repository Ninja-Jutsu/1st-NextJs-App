'use client'
import React from 'react'
import IconUnstyledBtn from '../UnstyledButton/IconUnstyledBtn'

function ExtraBtns() {
  function handleShare() {}
  function handleFavorite() {}
  return (
    <div className='Extras'>
      <IconUnstyledBtn
        onClick={handleFavorite}
        iconId={'favorite'}
        iconSize={24}
      />
      <IconUnstyledBtn
        onClick={handleShare}
        iconId={'share'}
        iconSize={24}
      />
    </div>
  )
}

export default ExtraBtns
