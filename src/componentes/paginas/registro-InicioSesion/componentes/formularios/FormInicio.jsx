import { useState } from "react";
import { Link } from "react-router-dom";
// import SocialMedia from "../SocialMedia";
import './Formularios.scss';

const Inicio = ({ isSelectedInicio }) => {
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
    <div id="Inicio" role="tabpanel" className={`single__tabs__panel tab-pane fade ${isSelectedInicio ? "in active" : ""}`}>
      <form className="Inicio" onSubmit={handleSubmit}>
        <div className="input-InicioReg">
          <p className="textInput">Correo</p>
          <input type="text" placeholder="nombre@ejemplo.com*" onChange={(e) => setUserName(e.target.value)} />
          <p className="textInput">Contraseña</p>
          <input type="password" placeholder="mín. 8 carácteres" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="tabs__checkbox">
          <input type="checkbox" />
          {/* <span> Remember me</span>
          <span className="forget">
            <Link to="#">Forget Pasword?</Link>
          </span> */}
          <span> Mantenme conectado</span>
        </div>
        <div className="htc__Inicio__btn mt--30">
          <button type="submit">Inicio</button>
        </div>
      </form>

      <div className="htc__social__connect">
        <h2>Or Inicio With</h2>
        <ul className="htc__soaial__list">
          {/* <SocialMedia bgName="instagram" icon="instagram" />
          <SocialMedia bgName="facebook" icon="facebook" />
          <SocialMedia bgName="googleplus" icon="google-plus" /> */}
        </ul>
      </div>
    </div>
  );
};

export default Inicio;