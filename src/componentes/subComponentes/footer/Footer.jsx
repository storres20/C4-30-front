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
      <div className='flex-desktop'>
        <div className='flex hide-phone'>
          <div className='divspace'>
            <h1 className='title'>Contenido</h1>
            <h2 className='subtitle'>Sobre Veridé</h2>
            <h2 className='subtitle'>Productos</h2>
            <h2 className='subtitle'>Contáctanos</h2>
          </div>

          <div className='divspace'>
            <h1 className='title'>Únete</h1>
            <h2 className='subtitle'>Inicia Sesión</h2>
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

      <div className='flex-red'>
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
