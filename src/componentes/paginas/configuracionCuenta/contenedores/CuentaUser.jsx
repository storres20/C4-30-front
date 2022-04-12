import React from "react";
import "./ConfiguracionCuenta.scss";
import "antd/dist/antd.css";
import FormCuentaUser from "../componentes/formularios/FormCuentaUser";
import SidebarLateral from "../componentes/SidebarLateral";
import NavBarHome from "../../../subComponentes/navBar/NavBarHome";
import Footer from "../../../subComponentes/footer/Footer";

function CuentaUser() {
  return (
    <section className="flex-contenedorConfigCuenta">
        <NavBarHome/>
      <div className="contenedorConfigCuenta flexBox-CG">
        <SidebarLateral />
        <FormCuentaUser />
      </div>
      <Footer/>
    </section>
  );
}

export default CuentaUser;
