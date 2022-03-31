import React from 'react'

import phone from "../../imagenes/iconos/bx_bx-phone.svg"
import map from "../../imagenes/iconos/bx_bx-map.svg"
import send from "../../imagenes/iconos/carbon_send-alt.svg"

export default function Footer() {
  return (
    <div>
      <h1>Contáctanos</h1>
      <div>
        <img src={phone} alt="phone" />
        <h2>(480) 555-0103</h2>
      </div>
      <div>
        <img src={map} alt="map" />
        <h2>4517 Washington Ave.</h2>
      </div>
      <div>
        <img src={send} alt="send" />
        <h2>debra.holt@example.com</h2>
      </div>
    </div>
  )
}
