import './globals.css'
import Header from '../components/Layout/Header'

export const metadata = {
  title: 'Welcome to wisdom',
  description: 'My first Next Social Network',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
