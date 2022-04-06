import React from "react";
import "./ConfiguracionCuenta.scss";
import "antd/dist/antd.css";
import SidebarLateral from "../componentes/SidebarLateral";
import FormDireccionUser from "../componentes/formularios/FormDireccionUser";

function DireccionUser() {
  return (
    <section className="contenedorConfigCuenta flexBox-CG">
      <SidebarLateral/>
      <FormDireccionUser/> 
    </section>
  );
}

export default DireccionUser;
