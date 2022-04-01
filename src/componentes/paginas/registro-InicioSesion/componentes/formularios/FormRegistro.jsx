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
          <label className="textInput">Correo</label>
          <input
            className="input"
            type="email"
            placeholder="nombre@ejemplo.com*"
          />
          <label className="textInput">Contraseña</label>
          <input
            className="input"
            type="password"
            placeholder="mín. 8 carácteres"
          />
        </div>
        <div className="tabsCheckbox">
          <input type="checkbox" />
          <span> Mantenme conectado</span>
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
