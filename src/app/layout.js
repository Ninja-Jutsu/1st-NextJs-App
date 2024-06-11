import { Inter } from 'next/font/google'

import './globals.css'
import Header from '../components/Layout/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to wisdom',
  description: 'My first Next Social Network',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
