import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/core";
import Logo from "../../imagenes/Logo3-Largo.png";
import axios from "axios";
import "./Formularios.scss";

function FormRecuperarContrasena() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://country-app-v3.herokuapp.com/verify_account", JSON.stringify({ email }))
      .then((data) => {
        window.location.pathname = "/Verificar-Cuenta";
        localStorage.setItem("verify_account", data.data.email);
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
      <section className="container">
        <div className="btnVolver">
          <Link to="/Inicio-Sesion">
            <button type="button">
              <i className="uil uil-arrow-left"></i>
            </button>
          </Link>
        </div>
        <div className="logoInicioOtros">
          <img src={Logo} alt="Veridé" />
        </div>
        <form className="centerForm" onSubmit={handleSubmit}>
          <h2>Verifica tu correo electrónico</h2>
          <div className="start">
            <p>
              Escríbelo a continuación para comprobar que sea tu correo
              electrónico.
            </p>
          </div>
          <div className="inputsBoxB">
            <label>
              <span className="textInput">Correo Electrónico</span>
              <input
                className="inputB"
                required="true"
                type="email"
                placeholder="nombre@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div className="btnsIngresarOtros">
              <button type="submit">Enviar Clave</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default FormRecuperarContrasena;
