import React from 'react'
import FormVerificarCuenta from '../componentes/formularios/FormVerificarCuenta'
import Slider from '../componentes/slider/Slider'
import './Contenedor.scss' 


function VerificarCuenta() {
  return (
    <section className='grid-Contenedor'>
    <div className='contenedorIzquierdo'>
      <FormVerificarCuenta />
    </div>
    <div className='contenedorDerecho'>
      <Slider />
    </div>
  </section>
  )
}

export default VerificarCuenta
