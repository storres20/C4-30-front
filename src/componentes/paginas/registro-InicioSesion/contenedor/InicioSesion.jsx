import React from 'react'
import FormInicioSesion from '../componentes/formularios/FormInicioSesion'
import Slider from '../componentes/slider/Slider'
import './Contenedor.scss' 


function InicioSesion() {
  return (
    <section className='grid-Contenedor'>
      <div className='contenedorIzquierdo'>
        <FormInicioSesion />
      </div>
      <div className='contenedorDerecho'>
        <Slider />
      </div>
    </section>
  )
}

export default InicioSesion