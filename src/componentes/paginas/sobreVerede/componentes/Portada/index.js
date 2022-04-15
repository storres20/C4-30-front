import React from 'react'
import {PortadaContainer,PortadaBg ,VideoBg,PortadaContent,PortadaH1,PortadaP,PortadaBoxs,PortadaBox, PortadaImg,PortadaIcon, PortadaH2,PortadaP2 } from './PortadaElements'
import Video from '../../video/veganFood.mp4'
import platita from '../../../registro-InicioSesion/imagenes/plantita.png'
import reciclaje from '../../../registro-InicioSesion/imagenes/Reciclaje.png'
import variedad from '../../../registro-InicioSesion/imagenes/variedad.png'
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
            <PortadaIcon src={platita}/>
              <PortadaH2>Saludable</PortadaH2>
              <PortadaP2>Nos preocupamos en tu bienestar por eso pensamos saludable.</PortadaP2>
          </PortadaBox>
          <PortadaBox>
            <PortadaIcon src={reciclaje}/>
              <PortadaH2>Ecológico</PortadaH2>
              <PortadaP2>Contribuimos y fomentamos en preservar nuestro hogar, el planeta tierra. </PortadaP2>
          </PortadaBox>
          <PortadaBox>
            <PortadaIcon src={variedad}/>
              <PortadaH2>Variado</PortadaH2>
              <PortadaP2> Contamos con una carta variada para todos los gustos.</PortadaP2>
          </PortadaBox>
        </PortadaBoxs>
      </PortadaContent>
    </PortadaContainer>
  )
}

export default PortadaSection
