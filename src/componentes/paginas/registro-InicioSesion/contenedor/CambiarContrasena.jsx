import React from "react";
import FormCambiarContrasena from "../componentes/formularios/FormCambiarContrasena";
import Slider from "../componentes/slider/Slider";
import "./Contenedor.scss"

function CambiarContrasena() {
  return (
    <section className="grid-Contenedor">
      <div className="contenedorIzquierdo">
        <FormCambiarContrasena />
      </div>
      <div className="contenedirDerecho">
        <Slider />
      </div>
    </section>
  );
}

export default CambiarContrasena;
