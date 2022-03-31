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
