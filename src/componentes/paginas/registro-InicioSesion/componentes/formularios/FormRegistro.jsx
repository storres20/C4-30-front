import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Alert, AlertTitle } from "@material-ui/core";
import axios from "axios";
import "./Formularios.scss";

const Registro = ({ isSelectedRegistro }) => {
  const style = { fontSize: "3em" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://country-app-v3.herokuapp.com/sign_up",
        JSON.stringify({ email, password })
      )
      .then((data) => {
        window.location.pathname = `/Verificar-Cuenta/Nuevo-Usuario/${data.data.id}`;
        localStorage.setItem("confirmation_email", data.data.email);
      })
      .catch((error) => {
        if (error.request) {
          setError(error.request.response);
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      window.location.pathname = "/";
    }
  }, []);

  return (
    <>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error} — <strong>pruebe de nuevo</strong>
        </Alert>
      )}
      <section
        id="register"
        role="tabpanel"
        className={`single__tabs__panel tab-pane fade ${
          isSelectedRegistro ? "in active" : ""
        }`}
      >
        <form className="login" method="post" onSubmit={handleSubmit}>
          <div className="inputsBox">
          <label>
              <span className="textInput">Usuario</span>
              <input
                className="input"
                required="true"
                type="text"
                placeholder="Ingresa tu Nombre*"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span className="textInput">Correo</span>
              <input
                className="input"
                required="true"
                type="email"
                placeholder="nombre@ejemplo.com*"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span className="textInput">Contraseña</span>
              <input
                className="input"
                required="true"
                type="password"
                placeholder="mín. 8 carácteres"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="tabsCheckbox">
            <label>
              <input type="checkbox" className="checkbox" />
              <span className="checkmark"> Mantenerme conectado</span>
            </label>
          </div>
          <div className="btnsIngresar">
            <button type="submit">Registrarse</button>
          </div>
        </form>

        <div className="RedesSocialesBox">
          <br />
          <h4>O registrate con</h4>
          <div className="RedesSocialesRegistro">
            <FcGoogle style={style} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registro;
