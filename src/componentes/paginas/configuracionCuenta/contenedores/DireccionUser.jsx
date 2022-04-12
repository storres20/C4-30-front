import React from "react";
import "./ConfiguracionCuenta.scss";
import "antd/dist/antd.css";
import SidebarLateral from "../componentes/SidebarLateral";
import FormDireccionUser from "../componentes/formularios/FormDireccionUser";
import NavBarHome from "../../../subComponentes/navBar/NavBarHome";
import Footer from "../../../subComponentes/footer/Footer";

function DireccionUser() {
  return (
    <section className="flex-contenedorConfigCuenta">
      <NavBarHome />
      <div className="contenedorConfigCuenta flexBox-CG">
        <SidebarLateral />
        <FormDireccionUser />
      </div>
      <Footer />
    </section>
  );
}

export default DireccionUser;
