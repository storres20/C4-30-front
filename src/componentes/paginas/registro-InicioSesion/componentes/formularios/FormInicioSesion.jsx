import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import "./Formularios.scss";

const Inicio = ({ isSelectedInicio }) => {
  const style = { fontSize: "3em" }
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");

    try {
    } catch (error) {
      console.warn("Inicio error", error);
    }

    // after successful submission remove the text from the fields
    setUserName("");
    setPassword("");
  };

  return (
    <section
      id="Inicio"
      role="tabpanel"
      className={`single__tabs__panel tab-pane fade ${
        isSelectedInicio ? "in active" : ""
      }`}
    >
      <form className="Inicio" onSubmit={handleSubmit}>
        <div className="inputsBox">
          <label className="textInput">Correo</label>
          <input
            className="input"
            type="email"
            placeholder="nombre@ejemplo.com*"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="textInput">Contraseña</label>
          <input
            className="input"
            type="password"
            placeholder="mín. 8 carácteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="tabsCheckbox">
          <input type="checkbox" />
          <span> Mantenme conectado</span>
        </div>
        <div className="btnsIngresar">
          <Link to="/Home">
            <button type="submit">Ingresar</button>
          </Link>
        </div>
        <br />
        <div className="center">
          <span> ¿Olvidaste tu contraseña?</span>
            <span className="forget">
            <Link to="/Recuperar-Contrasena">Recuperala aquí</Link>
          </span> 
        </div>
      </form>

      <div className="RedesSocialesBox">
        <h4>O inicia sesión con</h4>
        <div className="RedesSocialesInicio">
              <FcGoogle style={style} />
        </div>
      </div>
      
    </section>
  );
};

export default Inicio;
