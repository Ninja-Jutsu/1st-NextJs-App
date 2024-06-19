'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import AuthForm from '../../../components/Auth/AuthForm'

import { signup } from '../../../_actions/authAction'

function AuthPage() {
  const [state, formAction] = useFormState(signup, { message: null })
  const { pending } = useFormStatus()

  

  return (
    <div>
      <form action={formAction}>
        <p>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            type='text'
            required
          />
        </p>
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
        <button
          type='submit'
          disabled={pending}
        >
          {pending ? 'Creating...' : 'Create'}
        </button>
        <p>{state.message && <p>{state.message}</p>}</p>
      </form>
    </div>
  )
}

export default AuthPage
