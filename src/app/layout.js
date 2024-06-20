import './globals.css'
import Header from '../components/Layout/Header'
import MenuOpenerProvider from '../context-providers/MenuOpenerProvider'
import ProfileOpenerProvider from '../context-providers/ProfileOpenerProvider'
import UserLoggedInProvider from '../context-providers/UserLoggedInProvider'
import CurrentUserProvider from '../context-providers/CurrentUserProvider'

import { cookies } from 'next/headers'

import MainMenuModel from '../components/Layout/MainMenu/MainMenuModel'
import ProfileSlider from '../components/Layout/ProfileMenu/ProfileSlider'

export const metadata = {
  title: 'Welcome to wisdom',
  description: 'My first Next Social Network',
}

export default function RootLayout({ children }) {
  const session = cookies().get('jwt')
  return (
    <html lang='en'>
      <body>
        <UserLoggedInProvider>
          <CurrentUserProvider>
            <MenuOpenerProvider>
              <ProfileOpenerProvider>
                <Header />
                <main className='Content'>
                  <MainMenuModel />
                  {children}
                  <ProfileSlider session={session} />
                </main>
              </ProfileOpenerProvider>
            </MenuOpenerProvider>
          </CurrentUserProvider>
        </UserLoggedInProvider>
      </body>
    </html>
  )
}
