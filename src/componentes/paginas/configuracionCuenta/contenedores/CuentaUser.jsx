import React from "react";
import "./ConfiguracionCuenta.scss";
import "antd/dist/antd.css";
import FormCuentaUser from "../componentes/formularios/FormCuentaUser";
import SidebarLateral from "../componentes/SidebarLateral";

function CuentaUser() {
  return (
    <section className="contenedorConfigCuenta flexBox-CG">
      <SidebarLateral/>
      <FormCuentaUser/>   
    </section>
  );
}

export default CuentaUser;
