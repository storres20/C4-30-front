import React from "react";
import InicioRegistro from "../componentes/formularios/InicioRegistro";
import Slider from "../componentes/slider/Slider";
import "./Contenedor.scss"

function InicioSesion() {
  return (
    <section className="grid-Contenedor">
        <div className="contenedorIzquierdo">
          <InicioRegistro />
        </div>
        <div className="contenedirDerecho">
          <Slider />
        </div>
    </section>
  );
}

export default InicioSesion;

