import React from "react";
import { Link } from "react-router-dom";
import "./Formularios.scss"

function FormRecuperarContrasena() {
  return (
    <section className="container">
    <div className="btnVolver">
      <Link to="/Inicio-Sesion">
        <button type="button">
          <i class="uil uil-arrow-left"></i>
        </button>
      </Link>
    </div>
  </section>
  )
}

export default FormRecuperarContrasena