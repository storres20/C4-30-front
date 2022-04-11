import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/core";
import "./Formularios.scss";
import Logo from "../../imagenes/Logo3-Largo.png";
import axios from "axios";

function FormVerificarCuenta() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://country-app-v3.herokuapp.com/recovert_account",
        JSON.stringify({
          code: Number(code),
          email: localStorage.getItem("verify_account"),
        })
      )
      .then((data) => {
        console.log(data);
        localStorage.removeItem("verify_account");
        window.location.pathname = `/Cambiar-Contrasena/${data.data.token}`;
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
    if (!localStorage.getItem("verify_account")) {
      window.location.pathname = "/Recuperar-Contrasena";
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
              <i class="uil uil-arrow-left"></i>
            </button>
          </Link>
        </div>
        <div className="logoInicioOtros">
          <img src={Logo} alt="Veridé" />
        </div>
        <form className="centerForm" onSubmit={handleSubmit}>
          <h2>Solo queda un último paso</h2>
          <div className="start">
            <p>
              Introduce el código de 6 dígitos enviado a{" "}
              <strong>{localStorage.getItem("verify_account")}</strong>
            </p>
          </div>
          <div className="inputsBoxB">
            <input
              className="inputB"
              required="true"
              type="number"
              placeholder="*"
              onChange={(e) => setCode(e.target.value)}
            />
            <div className="btnsIngresarOtros">
              <button type="submit">Verificar Cuenta</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default FormVerificarCuenta;
