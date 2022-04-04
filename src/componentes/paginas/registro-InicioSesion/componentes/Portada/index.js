import React from 'react'
import {PortadaContainer,PortadaBg ,VideoBg,PortadaContent,PortadaH1,PortadaP,PortadaBoxs,PortadaBox } from './PortadaElements'
import Video from '../../video/veganFood.mp4'

function PortadaSection () {
  return (
    <PortadaContainer>
      <div>
        <PortadaBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </PortadaBg>
      </div>

      <PortadaContent>
        <PortadaH1>
          Logo Extendido
        </PortadaH1>
        <PortadaP>
          Un revolucionario concepto de comida vegana. Divertida, artesanal y riquísima. Veredé es <i>the place to be… yourself!</i>
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
