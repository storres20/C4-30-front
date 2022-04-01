import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Formularios.scss";
import Logo from "../../imagenes/Logo3-Largo.png";

function FormRecuperarContrasena() {
  const [verificarCorreo, setverificarCorreo] = useState("");
  return (
    <section className="container">
      <div className="btnVolver">
        <Link to="/Inicio-Sesion">
          <button type="button">
            <i class="uil uil-arrow-left"></i>
          </button>
        </Link>
      </div>
      <div className="logoInicioOtros">
        <img src={Logo} alt="Veridé" />
      </div>
      <form className="centerForm">
        <h2>Verifica tu correo electrónico</h2>
        <div className="start">
          <p>
            Escríbelo a continuación para comprobar que sea tu correo
            electrónico.
          </p>
        </div>
        <div className="inputsBoxB">
          <label className="textInput">Correo Electrónico</label>
          <input
            className="inputB"
            required="true"
            type="email"
            placeholder="nombre@ejemplo.com"
            onChange={(e) => verificarCorreo(e.target.value)}
          />
          <div className="btnsIngresarOtros">
            <Link to="/Verificar-Cuenta">
              <button type="submit">Enviar Clave</button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default FormRecuperarContrasena;
