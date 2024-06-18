'use client'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useFormState } from 'react-dom'
import classes from './CreatePostPage.module.css'

import { sharePost } from '../../../_actions/postAction'

import FormSubmitBtn from '../../../components/UnstyledButton/PostSubmitBtn'
import ImagePicker from '../../../components/Posts/ImagePicker/image-picker'

function LoginPage() {
  const [state, formAction] = useFormState(sharePost, { message: null })

  return (
    <Wrapper>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>a post</span>
        </h1>
        <p>make us know what you are thinking!</p>
      </header>
      <main className={classes.main}>
        {/* when using action like this,
         Next behind the scenes will created a req to send to the Next server in this app, so func is triggered IN THE SERVER */}
        <form
          className={classes.form}
          action={formAction}
        >
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
              />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input
                type='email'
                id='email'
                name='email'
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              required
            />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input
              type='text'
              id='summary'
              name='summary'
              required
            />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required
            ></textarea>
          </p>
          <ImagePicker
            label='Your image'
            name='image'
          />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <FormSubmitBtn />
          </p>
        </form>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
  color: red;
`

export default LoginPage
