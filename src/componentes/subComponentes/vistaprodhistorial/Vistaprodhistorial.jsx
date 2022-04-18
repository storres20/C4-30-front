import React from 'react'

import './Vistaprodhistorial.css'

import VPHL from './VPHL/VPHL'

export default function Vistaprodhistorial() {
  return (
    <div className='flex0'>
      {/* Estos VPC luego pueden ser mapeados con la data de la API */}
      <VPHL/>
      <VPHL/>
      <VPHL/>
      <VPHL/>    
    </div>
  )
}
