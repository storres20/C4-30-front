import React from 'react'

import './Vistaprodhome.css'

import VPH from './VPH/VPH'

export default function Vistaprodhome() {
  return (
    <div className='flex0'>
      {/* Estos VPH luego pueden ser mapeados con la data de la API */}
      <VPH/>
      <VPH/>
      <VPH/>
      <VPH/>
      <VPH/>
      <VPH/>
    </div>
  )
}
