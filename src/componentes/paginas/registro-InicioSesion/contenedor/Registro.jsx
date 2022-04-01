import React from 'react'
import FormRegistro from '../componentes/formularios/FormRegistro'
import Slider from '../componentes/slider/Slider'
import './Contenedor.scss' 



function Registro() {
  return (
    <section className='grid-Contenedor'>
      <div className='contenedorIzquierdo'>
        <FormRegistro />
      </div>
      <div className='contenedorDerecho'>
        <Slider />
      </div>
    </section>
  )
}

export default Registro