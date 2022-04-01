import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

import "./Formularios.scss";

const Registro = ({ isSelectedRegistro }) => {
  const style = { fontSize: "3em" }
  return (
    <section
      id="register"
      role="tabpanel"
      className={`single__tabs__panel tab-pane fade ${
        isSelectedRegistro ? "in active" : ""
      }`}
    >
      <form className="login" method="post">
        <div className="inputsBox">
        <label>
          <span className="textInput">Correo</span>
          <input
            className="input"
            required="true"
            type="email"
            placeholder="nombre@ejemplo.com*"
          />
        </label>
        <label>
          <span className="textInput">Contraseña</span>
          <input
            className="input"
            required="true"
            type="password"
            placeholder="mín. 8 carácteres"
          />
        </label>
        </div>
        <div className="tabsCheckbox">
          <label>
            <input type="checkbox" className="checkbox"/>
            <span className="checkmark"> Mantenme conectado</span>
          </label>
        </div>
        <div className="btnsIngresar">
          <Link to="/Verificar-Cuenta/Nuevo-Usuario">
            <button type="submit">Registrarse</button>
          </Link>
        </div>
      </form>

      <div className="RedesSocialesBox">
        <h4>O registrate con</h4>
        <div className="RedesSocialesRegistro">
              <FcGoogle style={style} />
        </div>
      </div>
    </section>
  );
};

export default Registro;
