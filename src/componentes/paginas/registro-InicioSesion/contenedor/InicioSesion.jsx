import React from "react";
import LoginReg from "./LoginReg";
import Slider from "../componentes/slider/Slider";
import "./Contenedor.scss"

function InicioSesion() {
  return (
    <section className="grid-Contenedor">
        <div class="contenedorIzquierdo">
          <LoginReg />
        </div>
        <div class="contenedirDerecho">
          <Slider />
        </div>
    </section>
  );
}

export default InicioSesion;

