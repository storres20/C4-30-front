import React from "react";
import "./ConfiguracionCuenta.scss";
import SidebarLateral from "../componentes/SidebarLateral";
import FormMetodoPagoUser from "../componentes/formularios/FormMetodoPagoUser";
import NavBarHome from "../../../subComponentes/navBar/NavBarHome";
import Footer from "../../../subComponentes/footer/Footer";

function MetodoPagoUser() {
  return (
    <section className="flex-contenedorConfigCuenta">
      <NavBarHome />
      <div className="contenedorConfigCuenta flexBox-CG">
        <SidebarLateral />
        <FormMetodoPagoUser />
      </div>
      <Footer />
    </section>
  );
}

export default MetodoPagoUser;
