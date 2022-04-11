import React from "react";
import "./ConfiguracionCuenta.scss";
import SidebarLateral from "../componentes/SidebarLateral";
import FormMetodoPagoUser from "../componentes/formularios/FormMetodoPagoUser";

function MetodoPagoUser() {
  return (
    <section className="contenedorConfigCuenta flexBox-CG">
      <SidebarLateral/>
      <FormMetodoPagoUser/>      
    </section>
  );
}

export default MetodoPagoUser;
