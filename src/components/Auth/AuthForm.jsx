'use client'

import React from 'react'
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'

import { signup } from '../../_actions/authAction'
import { login } from '../../_actions/authAction'

function AuthForm() {
  const [isLogin, setIsLogin] = React.useState(true)
  const [signUpState, signUpFormAction] = useFormState(signup, { message: null })
  const [loginState, loginFormAction] = useFormState(login, { message: null })

  const { pending } = useFormStatus()

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  return (
    <form action={isLogin ? loginFormAction : signUpFormAction}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {!isLogin && (
        <p>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            type='text'
            required
          />
        </p>
      )}
      <p>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          required
        />
      </p>
      <p>
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          id='password'
          name='password'
        />
      </p>
      <div className='Actions'>
        <button
          type='button'
          onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
        {isLogin && (
          <button
            type='submit'
            disabled={pending}
          >
            {pending ? 'Login...' : 'Login'}
          </button>
        )}
        {!isLogin && (
          <button
            type='submit'
            disabled={pending}
          >
            {pending ? 'Creating Account...' : 'Create Account'}
          </button>
        )}
      </div>
      <div className='Feedback'>
        {!isLogin && <p>{signUpState.message && <p>{signUpState.message}</p>}</p>}
        {isLogin && <p>{loginState.message && <p>{loginState.message}</p>}</p>}
      </div>
    </form>
  )
}

export default AuthForm
