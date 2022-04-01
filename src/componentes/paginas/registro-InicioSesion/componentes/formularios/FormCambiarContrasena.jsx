import { useState } from "react";
import { Link } from "react-router-dom";
import "./Formularios.scss";
import Logo from "../../imagenes/Logo3-Largo.png";

function FormCambiarContrasena() {
  const [newpassword, setnewPassword] = useState("");
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
        <h2>Cambiar contraseña</h2>
        <div className="start">
          <p>
            A continuación ingresa tu nueva contraseña y disfruta de los
            servicios de Veride.
          </p>
        </div>
        <div className="inputsBoxC">
          <label className="textInputB">Contraseña Nueva</label>
          <input
            className="input"
            required="true"
            type="password"
            placeholder="mín. 8 carácteres"
            onChange={(e) => newpassword(e.target.value)}
          />
          <label className="textInput">Confirmar Contraseña Nueva</label>
          <input
            className="input"
            required="true"
            type="password"
            placeholder="mín. 8 carácteres"
            onChange={(e) => newpassword(e.target.value)}
          />
          <div className="btnsIngresarOtros">
            <Link to="/Inicio-Sesion">
              <button type="submit">Cambiar Contraseña</button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default FormCambiarContrasena;
