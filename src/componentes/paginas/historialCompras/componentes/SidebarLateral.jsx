import React from "react";
import "../contenedores/HistorialCompras.scss";
import "antd/dist/antd.css";
import Vistaprodcarrito from "../../../subComponentes/vistaprodhistorial/Vistaprodhistorial";

function SidebarLateral() {
  return (
    <div className="container-A-carritoCompras">
      <div className="titleContainerLeft">
        <h1>Historial de Compras (25)</h1>
      </div>
      <section className="btnsContainer-Configuration">
        <button id="toDo" className=' boxBtnCarritoCompras' to="/Configuracion-de-Cuenta">
            <Vistaprodcarrito />
        </button>
      </section>
      
    </div>
  );
}

export default SidebarLateral;
