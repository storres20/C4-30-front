import React from "react";
import "../contenedores/ConfiguracionCuenta.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { FiUser, FiMapPin, FiCreditCard } from "react-icons/fi";

function SidebarLateral() {
  return (
    <div className="container-A">
      <div className="titleContainerLeft">
        <h1>Configuración</h1>
      </div>
      <section className="btnsContainer-Configuration">
        <Link className="btnLeft-CG" role="button" to="/Configuracion-Cuenta/Personal">
            <label className="iconbtn-CG">
              <FiUser className="icon-React" />
            </label>
            <aside>
              <h3>Cuenta</h3>
              <p>Información Personal</p>
            </aside>
        </Link>
        <Link className="btnLeft-CG" role="button" to="/Configuracion-Cuenta/Direccion">
            <label className="iconbtn-CG">
              <FiMapPin className="icon-React" />
            </label>
            <aside>
              <h3>Dirección</h3>
              <p>Ubicación de entrega</p>
            </aside>
        </Link>
        <Link className="btnLeft-CG" role="button" to="/Configuracion-Cuenta/Metodo-Pago">
            <label>
              <FiCreditCard className="icon-React" />
            </label>
            <aside>
              <h3>Método de Pago</h3>
              <p>Conección con Tarjetas</p>
            </aside>
        </Link>
      </section>
    </div>
  );
}

export default SidebarLateral;
