import React from 'react'
import tagLine from '../assets/img/tagline.png'
import Form from './ReusableComponents/Form'
import { StyledHome } from './StyledComponents/home'
import { StyledContainer, StyledCard } from './StyledComponents/homeContainer'

function home() {
  return (
    <StyledHome>
      <StyledContainer>
        <StyledCard>
          <div className="tagLine">
            <img src={tagLine} />
          </div>
        </StyledCard>
      </StyledContainer>
      <Form />
    </StyledHome>
  )
}

export default home
