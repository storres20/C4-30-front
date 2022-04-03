import React from 'react'
import {ContactInfo,ContactoContainer,ContactoH1,ContactoSubtitulo,ContactoBtnLink,ContactoBtn } from './InfoElements'

function Contacto() {
  return (
    <>
      <ContactoContainer>
          <ContactInfo>
            <ContactoH1>Quienes Somos</ContactoH1>
            <ContactoSubtitulo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi natus quia perspiciatis reiciendis rem atque ad.</ContactoSubtitulo>
          </ContactInfo>
          <ContactoBtn>
            <ContactoBtnLink to="/Sobre-Verede">Ingresa Aquí</ContactoBtnLink>
          </ContactoBtn>
      </ContactoContainer>
    </>
  )
}

export default Contacto