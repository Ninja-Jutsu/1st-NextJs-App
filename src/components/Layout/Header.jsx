'use client'
import React from 'react'
import styled from 'styled-components'
import { COLORS, WEIGHTS } from '../../helpers/constants'
import Link from 'next/link'

import AllTopics from './TopicButton'
import ActionsButtons from '../Layout/ActionsButtons'

// TODO: fetch topics and pass then here
function Header({ topics }) {
  return (
    <Wrapper>
      <LogoWrapper>
        <EnglishTitleWrapper>
          <Link href='/'>Wisdom</Link>
        </EnglishTitleWrapper>
        <ArabicTitleWrapper>
          <Link href='/'>7ikma</Link>
        </ArabicTitleWrapper>
      </LogoWrapper>
      <TopicsWrapper>
        <AllTopics topics={topics} />
      </TopicsWrapper>
      <ActionsWrapper>
        <ActionsButtons />
      </ActionsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: hsl(${COLORS.primary});
  color: hsl(${COLORS.secondary});
  min-height: 15vh;
  padding: 0 10px;
`
const EnglishTitleWrapper = styled.div`
  transform: translateY(0%);
  transition: transform 600ms;
`
const ArabicTitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  transition: transform 600ms;
`
const LogoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 3rem;
  font-weight: ${WEIGHTS.bold};
  &:hover ${ArabicTitleWrapper} {
    transform: translateY(0%);
    transition: transform 250ms;
  }
  &:hover ${EnglishTitleWrapper} {
    transform: translateY(-101%);
    transition: transform 250ms;
  }
`

const TopicsWrapper = styled.div`
  display: flex;
  gap: 10px;
`
const ActionsWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export default Header
