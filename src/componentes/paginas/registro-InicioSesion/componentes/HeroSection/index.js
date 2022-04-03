import React from 'react'
import {HeroContainer,HeroBg ,VideoBg,HeroContent,HeroH1,HeroP,HeroBoxs,HeroBox } from './HeroElements'
import Video from '../../video/veganFood.mp4'

function HeroSection () {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Logo Extendido
        </HeroH1>
        <HeroP>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </HeroP>
        <HeroBoxs>
          <HeroBox>

          </HeroBox>
          <HeroBox>
          
          </HeroBox>
          <HeroBox>
          
          </HeroBox>
        </HeroBoxs>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
