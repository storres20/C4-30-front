import React from 'react'
import FormRegistro from '../componentes/formularios/FormRegistro'
import Slider from '../componentes/slider/Slider'
<<<<<<< HEAD
import './Contenedor.scss' 
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
=======
import "./Contenedor.scss"

function Registro() {
  return (
    <section className="grid-Contenedor">
        <div class="contenedorIzquierdo">
          <FormRegistro />
        </div>
        <div class="contenedirDerecho">
          <Slider />
        </div>
>>>>>>> ac03533e16eb946386801c64f37e1f237d8af0a4
    </section>
  )
}

export default Registro