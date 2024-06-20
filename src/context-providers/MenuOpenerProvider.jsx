'use client'
import React from 'react'

const MenuOpenerContext = React.createContext()

export default function MenuOpenerProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return <MenuOpenerContext.Provider value={{ isOpen, setIsOpen }}>{children}</MenuOpenerContext.Provider>
}

export function useMenuOpenContext() {
  const data = React.useContext(MenuOpenerContext)

  if (!data) {
    throw new Error('Cannot consume context in this component, it must be wrapper within ModelOpenerProvider')
  }

  return data
}
