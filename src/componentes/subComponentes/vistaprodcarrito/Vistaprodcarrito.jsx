import React from 'react'

import './Vistaprodcarrito.css'

import VPC from './VPC/VPC'

export default function Vistaprodcarrito() {
  return (
    <div className='flex0'>
      {/* Estos VPC luego pueden ser mapeados con la data de la API */}
      <VPC/>
      <VPC/>
      <VPC/>
      <VPC/>
      
    </div>
  )
}
