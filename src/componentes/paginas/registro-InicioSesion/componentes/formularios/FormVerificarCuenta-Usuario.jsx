import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Formularios.scss";
import Logo from "../../imagenes/Logo3-Largo.png";

function FormVerificarCuenta() {
  const [verificarCuenta, setverificarCuenta] = useState("");
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
        <h2>Solo queda un último paso</h2>
        <div className="start">
          <p>
          Introduce el código de 6 dígitos enviado a <strong>karol733@gmail.com</strong> 
          </p>
        </div>
        <div className="inputsBoxB">
          <input
            className="inputB"
            type="number"
            placeholder="*"
            onChange={(e) => verificarCuenta(e.target.value)}
          />
          <div className="btnsIngresarOtros">
            <Link to="/Cambiar-Contrasena">
              <button type="submit">Verificar Cuenta</button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default FormVerificarCuenta;
