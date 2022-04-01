import { useState } from "react";
import { Link } from "react-router-dom";
import Inicio from "./FormInicioSesion";
import Registro from "./FormRegistro";
import "./Formularios.scss";

const InicioRegistro = () => {
  const [isSelectedInicio, setSelectedInicio] = useState(true);
  const [isSelectedRegistro, setSelectedRegistro] = useState(false);

  const handleInicio = () => {
    setSelectedInicio(true);
    setSelectedRegistro(false);
  };

  const handleRegistro = () => {
    setSelectedInicio(false);
    setSelectedRegistro(true);
  };

  return (
    <>
      <section className="container">
        <div className="btnVolver">
          <Link to="/Home">
            <button type="button">
              <i class="uil uil-arrow-left"></i>
            </button>
          </Link>
        </div>

        <div className="btnsInicioRegistro" role="tablist">
          <il
            role="presentation"
            className={`Inicio ${isSelectedInicio ? "active" : ""}`}
          >
            <Link
              className="btns-Duo"
              to="#"
              role="tab"
              data-toggle="tab"
              onClick={handleInicio}
            >
              Inicio
            </Link>
          </il>
          <il
            role="presentation"
            className={`register ${isSelectedRegistro ? "active" : ""}`}
          >
            <Link
              className="btns-Duo"
              to="#"
              role="tab"
              data-toggle="tab"
              onClick={handleRegistro}
            >
              Registro
            </Link>
          </il>
        </div>

        <div className="row">
          <div className="ulBox">
            <div>
              {isSelectedInicio && (
                <Inicio isSelectedInicio={isSelectedInicio} />
              )}
              {isSelectedRegistro && (
                <Registro isSelectedRegistro={isSelectedRegistro} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InicioRegistro;
