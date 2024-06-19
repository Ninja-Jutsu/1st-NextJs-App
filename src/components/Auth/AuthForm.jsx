'use client'
import { useState, useRef } from 'react'
import { redirect } from 'next/navigation'

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const userNameInput = useRef()
  const emailInput = useRef()
  const passwordInput = useRef()

  async function submitHandler(e) {
    e.preventDefault()
    const enteredUserName = userNameInput.current.value
    const enteredEmail = emailInput.current.value
    const enteredPassword = passwordInput.current.value

    // we can add validation here if we want (skipped)
    if (isLogin) {
      // signIn method will automatically look for api/auth/[...nextauth]
      // 1st arg: defined the same provider we sat in the api route
      // signIn will always resolve , result will contain info about err if any
      // we pass redirect false to prevent NextAuth from redirecting us somewhere else which is the default behavior
      // result will either have a error prop with a string or null
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      })
      if (!result.error) {
        redirect('/')
      }
      console.log(result)
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword)
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    }
  }

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            name='email'
            type='email'
            id='email'
            required
            ref={emailInput}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            name='password'
            type='password'
            id='password'
            required
            ref={passwordInput}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AuthForm
