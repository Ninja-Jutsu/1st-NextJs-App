'use client'
import React from 'react'

import { useCurrentUserContext } from '../../context-providers/CurrentUserProvider'

function Context({ userId }) {
  const { setUserId } = useCurrentUserContext()
  setUserId(userId)

  return <></>
}

export default Context
