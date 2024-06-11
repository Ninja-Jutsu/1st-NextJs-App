'use client'
import React from 'react'
// import UnstyledButton from '../UnstyledButton/UnstyledButton'
import styled from 'styled-components'
import Link from 'next/link'

const DUMMY_TOPICS = ['Comedy', 'Philosophy', 'Football', 'Politics']

function AllTopics({ topics }) {
  return (
    <>
      {DUMMY_TOPICS.map((topic) => (
        <StyledLink
          href={`topics/${topic}`}
          key={topic}
        >
          {topic}
        </StyledLink>
      ))}
    </>
  )
}

const StyledLink = styled(Link)`
  display: block;
  width: max-content;
`

export default AllTopics
