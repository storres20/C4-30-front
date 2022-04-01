import { useState } from "react";
import { Link } from "react-router-dom";
import Inicio from "./FormInicio";
import Registro from "./FormRegistro";
import backgroundImg from "../../../../../imagenes/bebidas/gin_tonic.png";

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

      {/* <div className="htc__Inicio__register bg__white ptb--130" style={{ background: `rgba(0, 0, 0, 0) url(${backgroundImg}) no-repeat scroll center center / cover` }}> */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <ul className="Inicio__register__menu" role="tablist">
                <li role="presentation" className={`Inicio ${isSelectedInicio ? "active" : ""}`}>
                  <Link to="#" role="tab" data-toggle="tab" onClick={handleInicio}>
                    Inicio
                  </Link>
                </li>
                <li role="presentation" className={`register ${isSelectedRegistro ? "active" : ""}`}>
                  <Link to="#" role="tab" data-toggle="tab" onClick={handleRegistro}>
                    Registro
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Start Inicio Register Content --> */}
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="htc__Inicio__register__wrap">
                {/* <!-- Start Single Content --> */}
                {isSelectedInicio && <Inicio isSelectedInicio={isSelectedInicio} />}

                {/* <!-- End Single Content --> */}
                {/* <!-- Start Single Content --> */}
                {isSelectedRegistro && <Registro isSelectedRegistro={isSelectedRegistro} />}

                {/* <!-- End Single Content --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Inicio Register Content --> */}
        </div>
      {/* </div> */}
    </>
  );
};

export default InicioRegistro;