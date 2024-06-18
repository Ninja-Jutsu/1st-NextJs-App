import './globals.css'
import Header from '../components/Layout/Header'
import { MenuOpenerProvider } from '../context-providers/MenuOpenerProvider'
import { ProfileOpenerProvider } from '../context-providers/ProfileOpenerProvider'
import MainMenuModel from '../components/Layout/MainMenu/MainMenuModel'
import ProfileSlider from '../components/Layout/ProfileMenu/ProfileSlider'

export const metadata = {
  title: 'Welcome to wisdom',
  description: 'My first Next Social Network',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MenuOpenerProvider>
          <ProfileOpenerProvider>
            <Header />
            <main className='Content'>
              <MainMenuModel />
              {children}
              <ProfileSlider />
            </main>
          </ProfileOpenerProvider>
        </MenuOpenerProvider>
      </body>
    </html>
  )
}
