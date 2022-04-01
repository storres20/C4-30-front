import React from "react";
import { Link } from "react-router-dom";
import "./Formularios.scss";

const Registro = ({ isSelectedRegistro }) => {
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
          <Link to="/Verificar-Cuenta">
            <button type="submit">Registrarse</button>
          </Link>
        </div>
      </form>

      <div className="htc__social__connect">
        <h4>O registrate con</h4>
        <ul className="htc__soaial__list">
          {/* <SocialMedia bgName="instagram" icon="instagram" />
          <SocialMedia bgName="facebook" icon="facebook" />
          <SocialMedia bgName="googleplus" icon="google-plus" />
          <SocialMedia bgName="twitter" icon="twitter" /> */}
        </ul>
      </div>
    </section>
  );
};

export default Registro;
