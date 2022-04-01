import React from 'react'
import FormVerificarCuentaNuevoUsuario from '../componentes/formularios/FormVerificarCuenta-NuevoUsuario'
import Slider from '../componentes/slider/Slider'
import './Contenedor.scss' 


function VerificarCuenta() {
  return (
    <section className='grid-Contenedor'>
    <div className='contenedorIzquierdo'>
      <FormVerificarCuentaNuevoUsuario />
    </div>
    <div className='contenedorDerecho'>
      <Slider />
    </div>
  </section>
  )
}

export default VerificarCuenta
