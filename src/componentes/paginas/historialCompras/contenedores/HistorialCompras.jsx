import {React}  from "react";
import "./HistorialCompras.scss";
import "antd/dist/antd.css";
import NavBarHome from "../../../subComponentes/navBar/NavBarHome";
import SidebarLateral from "../componentes/SidebarLateral";
import Footer from "../../../subComponentes/footer/Footer";
import InformacionDeCompra from "../componentes/formularios/InformacionDeCompra";

function HistorialCompras() {

  return (
    <section className="flex-contenedorConfigCuenta">
      <NavBarHome />
      <div className="contenedorConfigCuenta flexBox-CG contenedorHistorialCompras">
        <SidebarLateral />
        <InformacionDeCompra />
      </div>
      <Footer />
    </section>
  );
}

export default HistorialCompras;
