import React from 'react'
import FormCambiarContrasena from '../componentes/formularios/FormCambiarContrasena'
import Slider from '../componentes/slider/Slider'
import './Contenedor.scss' 


function CambiarContraseña() {
  return (
    <section className='grid-Contenedor'>
      <div className='contenedorIzquierdo'>
        <FormCambiarContrasena />
      </div>
      <div className='contenedorDerecho'>
        <Slider />
      </div>
    </section>
  )
}

export default CambiarContraseña