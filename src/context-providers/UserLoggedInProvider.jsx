'use client'
import React from 'react'

const UserLoggedInContext = React.createContext()

export function UserLoggedInProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  return <UserLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</UserLoggedInContext.Provider>
}

export function useUserLoggedInContext() {
  const data = React.useContext(UserLoggedInContext)

  if (!data) {
    throw new Error('Cannot consume context in this component, it must be wrapper within ModelOpenerProvider')
  }

  return data
}
