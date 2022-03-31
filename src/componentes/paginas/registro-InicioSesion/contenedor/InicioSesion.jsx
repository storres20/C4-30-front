<<<<<<< HEAD
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
=======
import React from "react";
import FormLogin from "../componentes/formularios/FormInicioSesion";
import Slider from "../componentes/slider/Slider";
import "./Contenedor.scss"

function InicioSesion() {
  return (
    <section className="grid-Contenedor">
        <div class="contenedorIzquierdo">
          <FormLogin />
        </div>
        <div class="contenedirDerecho">
          <Slider />
        </div>
    </section>
  );
}

export default InicioSesion;
>>>>>>> ac03533e16eb946386801c64f37e1f237d8af0a4
