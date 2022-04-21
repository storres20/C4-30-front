import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/core";
import axios from "axios";
import "./Formularios.scss";
import Logo from "../../imagenes/Logo3-Largo.png";

function FormCambiarContrasena() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) return;

    axios
      .put(
        `https://country-app-v3.herokuapp.com/update_password`,
        JSON.stringify({ password: newPassword, token: params.token })
      )
      .then((data) => {
        window.location.pathname = "/Inicio-Sesion";
      })
      .catch((error) => {
        if (error.request) {
          setError(error.request.response);
        }
      });
  };

  useEffect(() => {
    if (confirmPassword !== newPassword) {
      setError("Debe confirmar el password correctamente");
    } else {
      setError("");
    }
  }, [newPassword, confirmPassword]);

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
            <button type="button" name="">
              <i className="uil uil-arrow-left"></i>
            </button>
          </Link>
        </div>
        <div className="logoInicioOtros">
          <img src={Logo} alt="Veridé" />
        </div>
        <form className="centerForm" onSubmit={handleSubmit}>
          <h2>Cambiar contraseña</h2>
          <div className="start">
            <p>
              A continuación ingresa tu nueva contraseña y disfruta de los
              servicios de Veride.
            </p>
          </div>
          <div className="inputsBoxC">
            <label>
              <span className="textInputB">Contraseña Nueva</span>
              <input
                className="input"
                required="true"
                type="password"
                placeholder="mín. 8 carácteres"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label>
              <span className="textInput">Confirmar Contraseña Nueva</span>
              <input
                className="input"
                required="true"
                type="password"
                placeholder="mín. 8 carácteres"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <div className="btnsIngresarOtros">
              <button name="" type="submit">Cambiar Contraseña</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default FormCambiarContrasena;
