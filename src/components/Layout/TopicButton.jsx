'use client'
import React from 'react'
// import UnstyledButton from '../UnstyledButton/UnstyledButton'
import styled from 'styled-components'
import Link from 'next/link'
import { COLORS } from '../../helpers/constants'

const DUMMY_TOPICS = ['Comedy', 'Philosophy', 'Football', 'Politics']

function AllTopics({ topics }) {
  return (
    <>
      {DUMMY_TOPICS.map((topic) => {
        return (
          <TopicWrapper key={topic}>
            <StyledLink href={`topics/${topic}`}>{topic}</StyledLink>
            <AbsoluteLink href={`topics/${topic}`}>{topic}</AbsoluteLink>
          </TopicWrapper>
        )
      })}
    </>
  )
}

const StyledLink = styled(Link)`
  display: block;
  width: max-content;
`

const AbsoluteLink = styled(StyledLink)`
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: clip-path 600ms;
  color: hsl(${COLORS.alert});
`

const TopicWrapper = styled.div`
  display: flex;
  position: relative;

  &:hover ${AbsoluteLink} {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 250ms;
  }
`

export default AllTopics
