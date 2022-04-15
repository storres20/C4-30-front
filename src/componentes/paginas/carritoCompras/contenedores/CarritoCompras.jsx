import {React, useState}  from "react";
import "./CarritoCompras.scss";
import "antd/dist/antd.css";
import NavBarHome from "../../../subComponentes/navBar/NavBarHome";
import SidebarLateral from "../componentes/SidebarLateral";
import Footer from "../../../subComponentes/footer/Footer";



// import FormCuentaUser from "../componentes/formularios/FormCuentaUser";
// import FormDireccionUser from "../componentes/formularios/FormDireccionUser";
import FormInformacionPagoUser from "../componentes/formularios/FormInformacionPagoUser";

function ConfiguracionCuenta() {
  const [status, setStatus] = useState('informacionPersonal');

  return (
    <section className="flex-contenedorConfigCuenta">
      <NavBarHome />
      <div className="contenedorConfigCuenta flexBox-CG contenedorCarritoCompras">
        <SidebarLateral setStatus={setStatus} />
        <FormInformacionPagoUser />
      </div>
      <Footer />
    </section>
  );
}

export default ConfiguracionCuenta;
