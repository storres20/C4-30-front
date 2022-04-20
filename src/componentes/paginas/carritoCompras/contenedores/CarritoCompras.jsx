import { React, useEffect } from "react";
import "./CarritoCompras.scss";
import "antd/dist/antd.css";
import NavBarHome from "../../../subComponentes/navBar/NavBarHome";
import SidebarLateral from "../componentes/SidebarLateral";
import Footer from "../../../subComponentes/footer/Footer";
import InformacionDeCompra from "../componentes/formularios/InformacionDeCompra";

function ConfiguracionCuenta({user}) {
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.pathname = "/inicio-sesion";
    }
  }, []);
// console.log(user)

  return (
    <section className="flex-contenedorConfigCuenta">
      <NavBarHome  user={user}/>
      <div className="contenedorConfigCuenta flexBox-CG contenedorCarritoCompras">
        <SidebarLateral />
        <InformacionDeCompra user={user}/>
      </div>
      <Footer />
    </section>
  );
}

export default ConfiguracionCuenta;
