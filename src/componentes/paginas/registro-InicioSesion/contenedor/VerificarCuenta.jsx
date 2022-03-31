<<<<<<< HEAD
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
=======
import React from "react";
import FormVerificarCuenta from "../componentes/formularios/FormVerificarCuenta";
import Slider from "../componentes/slider/Slider";
import "./Contenedor.scss"

function VerificarCuenta() {
  return (
    <section className="grid-Contenedor">
      <div class="contenedorIzquierdo">
        <FormVerificarCuenta />
      </div>
      <div class="contenedirDerecho">
        <Slider />
      </div>
    </section>
  );
}

export default VerificarCuenta;
>>>>>>> ac03533e16eb946386801c64f37e1f237d8af0a4
