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
