import React from 'react'

import './VistaprodSobreVeride.scss'

import VPSV from './VPSV/VPSV'
//import axios from "axios"

export default function VistaprodSobreVeride() {
  return (
    <div className='flex0'>
      {/* Estos VPH luego pueden ser mapeados con la data de la API */}
      <VPSV />
    </div>
  )
}
