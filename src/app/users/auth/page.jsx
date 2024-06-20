import AuthForm from '../../../components/Auth/AuthForm'
import { checkUser } from '../../../lib/authHelpers'

import { isLoggedIn } from '../../../_actions/authAction'
import { redirect } from 'next/navigation'

async function AuthPage() {
  const { user, isLogged } = await isLoggedIn()

  if (isLogged) {
    redirect('/')
  }
  return (
    <>
      <div className='wrapper'>
        <header>
          <h1>Join us and share your thoughts!</h1>
        </header>
        <section>
          <AuthForm />
        </section>
        {/* <p>{message && message}</p> */}
      </div>
    </>
  )
}

export default AuthPage
