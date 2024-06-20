'use client'
import React from 'react'

const ProfileOpenerContext = React.createContext()

export default function ProfileOpenerProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return <ProfileOpenerContext.Provider value={{ isOpen, setIsOpen }}>{children}</ProfileOpenerContext.Provider>
}

export function useProfileOpenerContext() {
  const data = React.useContext(ProfileOpenerContext)

  if (!data) {
    throw new Error('Cannot consume context in this component, it must be wrapper within ModelOpenerProvider')
  }

  return data
}
