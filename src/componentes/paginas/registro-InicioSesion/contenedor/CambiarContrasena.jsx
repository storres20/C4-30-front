import React from "react";
import FormCambiarContrasena from "../componentes/formularios/FormCambiarContrasena";
import Slider from "../componentes/slider/Slider";
import "./Contenedor.scss"

function CambiarContrasena() {
  return (
    <section className="grid-Contenedor">
      <div class="contenedorIzquierdo">
        <FormCambiarContrasena />
      </div>
      <div class="contenedirDerecho">
        <Slider />
      </div>
    </section>
  );
}

export default CambiarContrasena;
