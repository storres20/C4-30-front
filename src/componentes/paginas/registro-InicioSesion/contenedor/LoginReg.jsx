import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../componentes/formularios/FormLogin";
import Registration from "../componentes/formularios/FormRegistro";
import backgroundImg from "../../../../imagenes/bebidas/gin_tonic.png";

const LoginRegister = () => {
  const [isSelectedLogin, setSelectedLogin] = useState(true);
  const [isSelectedRegister, setSelectedRegister] = useState(false);

  const handleLogin = () => {
    setSelectedLogin(true);
    setSelectedRegister(false);
  };

  const handleRegistration = () => {
    setSelectedLogin(false);
    setSelectedRegister(true);
  };

  return (
    <>

      <div className="htc__login__register bg__white ptb--130" style={{ background: `rgba(0, 0, 0, 0) url(${backgroundImg}) no-repeat scroll center center / cover` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <ul className="login__register__menu" role="tablist">
                <li role="presentation" className={`login ${isSelectedLogin ? "active" : ""}`}>
                  <Link to="#" role="tab" data-toggle="tab" onClick={handleLogin}>
                    Login
                  </Link>
                </li>
                <li role="presentation" className={`register ${isSelectedRegister ? "active" : ""}`}>
                  <Link to="#" role="tab" data-toggle="tab" onClick={handleRegistration}>
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Start Login Register Content --> */}
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="htc__login__register__wrap">
                {/* <!-- Start Single Content --> */}
                {isSelectedLogin && <Login isSelectedLogin={isSelectedLogin} />}

                {/* <!-- End Single Content --> */}
                {/* <!-- Start Single Content --> */}
                {isSelectedRegister && <Registration isSelectedRegister={isSelectedRegister} />}

                {/* <!-- End Single Content --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Login Register Content --> */}
        </div>
      </div>
    </>
  );
};

export default LoginRegister;