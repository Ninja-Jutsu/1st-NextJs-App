'use client'
import React from 'react'
import styled from 'styled-components'
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'

import { sharePost } from '../../../_actions/postAction'

import { COLORS, WEIGHTS } from '../../../helpers/constants'
import ImagePicker from '../../../components/Posts/ImagePicker/image-picker'
import { HighlightSpan } from '../../../components/StyledElements/StyledElements'

function LoginPage() {
  const [state, formAction] = useFormState(sharePost, { message: null })
  const { pending } = useFormStatus()
  console.log(state)
  return (
    <Wrapper>
      <FormHeader>
        <h1>
          Share your <HighlightSpan>thoughts</HighlightSpan>
        </h1>
        <p>make us know what you are thinking!</p>
      </FormHeader>
      <Main>
        {/* when using action like this,
         Next behind the scenes will created a req to send to the Next server in this app, so func is triggered IN THE SERVER */}
        <Form action={formAction}>
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
            <label htmlFor='desc'>Content</label>
            <textarea
              id='desc'
              name='desc'
              rows='10'
              required
            ></textarea>
          </p>
          <p>
            <label htmlFor='user'>user</label>
            <textarea
              id='user'
              name='user'
              rows='10'
              value={'66362ff93cdf966e1404b663'}
              required
            ></textarea>
          </p>
          <ImagePicker
            label='Your image'
            name='image'
          />
          {state.message && <p>{state.message}</p>}
          <Actions>
            <SubmitBtn
              type='submit'
              disabled={pending}
            >
              {pending ? 'Posting...' : 'Share'}
            </SubmitBtn>
          </Actions>
        </Form>
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  --main-orange: hsl(33, 94%, 57%);
  --second-orange: hsl(36, 100%, 50%);
`

const FormHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 80%;

  max-width: 75rem;
  color: ${`hsl(${COLORS.gray[700]})`};
  font-size: 1.5rem;

  & h1 {
    font-family: 'Montserrat', sans-serif;
  }
`

const Main = styled.main`
  width: 80%;
  margin: 3rem auto;
  color: white;
`
const Form = styled.form`
  width: 100%;
  max-width: 50rem;

  & label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: ${`hsl(${COLORS.gray[700]})`};
    font-weight: bold;
  }

  & input,
  & textarea {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 2px solid #454952;
    background: ${`hsl(${COLORS.gray[300]})`};
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #ddd6cb;
  }
  & input:focus,
  & textarea:focus {
    outline-color: var(--main-orange);
    background-color: ${`hsl(${COLORS.gray[500]})`};
  }
`

const Actions = styled.div`
  text-align: right;
`

const SubmitBtn = styled.button`
  border: 0;
  padding: 0.75rem 2rem;
  border: none;
  color: black;
  border-radius: 2px;
  cursor: pointer;
  font: inherit;
  font-size: 1.25rem;
  background: linear-gradient(90deg, var(--main-orange), var(--second-orange));
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #fd4715, #f9b241);
  }

  &:disabled,
  &:hover:disabled,
  &:focus:disabled {
    background: #ccc;
    color: #979797;
    cursor: not-allowed;
  }
`
export default LoginPage
