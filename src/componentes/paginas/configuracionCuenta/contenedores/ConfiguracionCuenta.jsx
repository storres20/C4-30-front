import { React, useState } from "react";
import "./ConfiguracionCuenta.scss";
import "antd/dist/antd.css";
import SidebarLateral from "../componentes/SidebarLateral";
import Footer from "../../../subComponentes/footer/Footer";

import FormCuentaUser from "../componentes/formularios/FormCuentaUser";
import FormDireccionUser from "../componentes/formularios/FormDireccionUser";
import FormMetodoPagoUser from "../componentes/formularios/FormMetodoPagoUser";
import NavBarHome from "../../../subComponentes/navBar/NavBarHome";

function ConfiguracionCuenta() {
  const [status, setStatus] = useState("informacionPersonal");
  let renderizado;

  if (status === "ubicacionEntrega") {
    renderizado = <FormDireccionUser />;
  } else if (status === "coneccionTarjetas") {
    renderizado = <FormMetodoPagoUser />;
  } else {
    renderizado = <FormCuentaUser />;
  }

  return (
    <section className="flex-contenedorConfigCuenta">
      <NavBarHome />
      <div className="contenedorConfigCuenta flexBox-CG">
        <SidebarLateral setStatus={setStatus} />
        {renderizado}
      </div>
      <Footer />
    </section>
  );
}

export default ConfiguracionCuenta;
