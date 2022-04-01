import React from "react";
import InicioRegistro from "../componentes/formularios/InicioRegistro";
import Slider from "../componentes/slider/Slider";
import "./Contenedor.scss"

function InicioSesion() {
  return (
    <section className="grid-Contenedor">
        <div class="contenedorIzquierdo">
          <InicioRegistro />
        </div>
        <div class="contenedirDerecho">
          <Slider />
        </div>
    </section>
  );
}

export default InicioSesion;

