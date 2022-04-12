import React from 'react'
import {PortadaContainer,PortadaBg ,VideoBg,PortadaContent,PortadaH1,PortadaP,PortadaBoxs,PortadaBox, PortadaImg } from './PortadaElements'
import Video from '../../video/veganFood.mp4'
import Logo from '../../../../../imagenes/LogoVeride/LogosSinFondo/Logo4-Largo.png'

function PortadaSection () {
  return (
    <PortadaContainer>
        <PortadaBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </PortadaBg>

      <PortadaContent>
        <PortadaH1>
          <PortadaImg src={Logo} alt='Veride'/>
        </PortadaH1>
        <PortadaP>
          Un revolucionario concepto de comida vegana. Divertida, artesanal y riquísima. Veridé es <i>the place to be… yourself!</i>
        </PortadaP>
        <PortadaBoxs>
          <PortadaBox>

          </PortadaBox>
          <PortadaBox>
          
          </PortadaBox>
          <PortadaBox>
          
          </PortadaBox>
        </PortadaBoxs>
      </PortadaContent>
    </PortadaContainer>
  )
}

export default PortadaSection
