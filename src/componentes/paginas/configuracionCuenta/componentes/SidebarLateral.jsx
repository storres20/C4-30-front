import React from "react";
import "../contenedores/ConfiguracionCuenta.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import {FiUser, FiMapPin, FiCreditCard } from 'react-icons/fi';

function SidebarLateral() {
  return (
        <section className="btnsContainer-Configuration">
          <Link to="/Configuracion-Cuenta/Cuenta">
          <button className="btnLeft-CG">
            <label className="iconbtn-CG">
              <FiUser className="icon-React"/>
            </label>
            <aside>
              <h3>Cuenta</h3>
              <p>Información Personal</p>
            </aside>
          </button>
          </Link>
          <Link to="/Configuracion-Cuenta/Direccion">
          <button className="btnLeft-CG">
            <label className="iconbtn-CG">
              <FiMapPin className="icon-React"/>
            </label>
            <aside>
              <h3>Dirección</h3>
              <p>Ubicación de entrega</p>
            </aside>
          </button>
          </Link>
          <Link to="/Configuracion-Cuenta/Metodo-Pago">
          <button className="btnLeft-CG">
            <label className="iconbtn-CG">
              <FiCreditCard className="icon-React"/>
            </label>
            <aside>
              <h3>Método de Pago</h3>
              <p>Conección con Tarjetas</p>
            </aside>
          </button>
          </Link>
        </section>
  );
}

export default SidebarLateral;
