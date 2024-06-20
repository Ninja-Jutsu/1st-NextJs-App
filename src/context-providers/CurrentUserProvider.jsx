'use client'
import React from 'react'

const CurrentUserContext = React.createContext()

export default function CurrentUserProvider({ children }) {
  const [userId, setUserId] = React.useState('')

  return <CurrentUserContext.Provider value={{ userId, setUserId }}>{children}</CurrentUserContext.Provider>
}

export function useCurrentUserContext() {
  const data = React.useContext(CurrentUserContext)

  if (!data) {
    throw new Error('Cannot consume context in this component, it must be wrapper within ModelOpenerProvider')
  }

  return data
}
