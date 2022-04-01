import React from 'react'

import phone from "../../imagenes/iconos/bx_bx-phone.svg"
import map from "../../imagenes/iconos/bx_bx-map.svg"
import send from "../../imagenes/iconos/carbon_send-alt.svg"

import './Footer.css'

export default function Footer() {
  return (
    <div className='style'>
      <div>
        <h1 className='title'>Contáctanos</h1>
        <div className='flex'>
          <img className='icon' src={phone} alt="phone" />
          <h2 className='subtitle'>(480) 555-0103</h2>
        </div>
        <div className='flex'>
          <img className='icon' src={map} alt="map" />
          <h2 className='subtitle'>4517 Washington Ave.</h2>
        </div>
        <div className='flex'>
          <img className='icon' src={send} alt="send" />
          <h2 className='subtitle'>debra.holt@example.com</h2>
        </div>
      </div>
      
      
    </div>
  )
}
