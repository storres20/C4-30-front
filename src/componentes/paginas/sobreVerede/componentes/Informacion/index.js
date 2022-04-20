import React from 'react'
import {InfoContainer, InfoSubtitulo, InfoH1, LogoImg} from './InfoElements'
import Logo from '../../../../../imagenes/LogoVeride/LogosSinFondo/Logo5.png'

function InfoSection() {
  return (
    <div id='infoSection'>
      <InfoContainer >
        <InfoH1 >Quiénes Somos</InfoH1>
        <InfoSubtitulo>
          Tras una primera experiencia vegetariana, nuestros platos se adaptaron rápida y naturalmente al concepto del veganismo, que atañe más a nuestras obligaciones morales hacia nuestro entorno y hacia los animales. Por ellos, por nosotros y por los que vienen detrás, tratamos de que nuestro paso en el planeta sea imperceptible y sostenible, pero sin perder de vista nuestro principal objetivo sobre el que se sostiene nuestro trabajo: dejar HUELLA con VEREDÉ en tu hábito más cotidiano, la alimentación.
        </InfoSubtitulo>
        <LogoImg src={Logo}/>
      </InfoContainer>
    </div>
  )
}

export default InfoSection
