import React from 'react'

import './Vistaprodhome.scss'

import VPH from './VPH/VPH'
//import axios from "axios"

export default function Vistaprodhome() {
  return (
    <div className='flex0'>
      {/* Estos VPH luego pueden ser mapeados con la data de la API */}
      <VPH />
    </div>
  )
}
