import React from 'react'

import phone from "./imagenes/bx_bx-phone.svg"
import map from "./imagenes/bx_bx-map.svg"
import send from "./imagenes/carbon_send-alt.svg"

import facebook from './imagenes/ant-design_facebook-filled.svg'
import instagram from './imagenes/ant-design_instagram-outlined.svg'
import twitter from './imagenes/ant-design_twitter-outlined.svg'




import './Footer.css'

export default function Footer() {
  return (
    <div className='style'>
      <div className='flex'>
        <div className='flex hide-phone'>
          <div>
            <h1 className='title'>Contenido</h1>
            <h2 className='subtitle'>Conocenos</h2>
            <h2 className='subtitle'>Nuestra Carta</h2>
            <h2 className='subtitle'>Contactanos</h2>
          </div>

          <div>
            <h1 className='title'>Unete</h1>
            <h2 className='subtitle'>Inicia Sesion</h2>
            <h2 className='subtitle'>Registrate</h2>
          </div>

          <div>
            <h1 className='title'>Sucursales</h1>
            <h2 className='subtitle'>Lores Ipsum</h2>
            <h2 className='subtitle'>Lores Ipsum</h2>
            <h2 className='subtitle'>Lores Ipsum</h2>
            <h2 className='subtitle'>Lores Ipsum</h2>
          </div>
        </div>

        <div className='divcontactanos'>
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

      <div>
        <h1 className='title'>Redes sociales</h1>
        <div className='flex'>
          <img className='iconred' src={facebook} alt="facebook" />
          <img className='iconred' src={instagram} alt="instagram" />
          <img className='iconred' src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  )
}
