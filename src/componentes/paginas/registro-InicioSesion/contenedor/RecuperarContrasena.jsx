import React from "react";
import FormRecuperarContrasena from "../componentes/formularios/FormRecuperarContrasena";
import Slider from "../componentes/slider/Slider";
import "./Contenedor.scss"

function RecuperarContrasena() {
  return (
    <section className="grid-Contenedor">
      <div class="contenedorIzquierdo">
        <FormRecuperarContrasena />
      </div>
      <div class="contenedirDerecho">
        <Slider />
      </div>
    </section>
  );
}

export default RecuperarContrasena;
