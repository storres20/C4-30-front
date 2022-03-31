import React from 'react'
import FormRecuperarContrasena from '../componentes/formularios/FormRecuperarContrasena'
import Slider from '../componentes/slider/Slider'
import './Contenedor.scss' 


function RecuperarContraseña() {
  return (
    <section className='grid-Contenedor'>
      <div className='contenedorIzquierdo'>
        <FormRecuperarContrasena />
      </div>
      <div className='contenedorDerecho'>
        <Slider />
      </div>
    </section>
  )
}

export default RecuperarContraseña
