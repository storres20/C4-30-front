import React, { useState, useEffect } from "react";
import "../contenedores/HistorialCompras.scss";
import "antd/dist/antd.css";
import Vistaprodcarrito from "../../../subComponentes/vistaprodhistorial/Vistaprodhistorial";
import axios from "axios";


function SidebarLateral() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://country-app-v3.herokuapp.com/buy/${localStorage.getItem("id")}`
      )
      .then(({ data }) => {
        setState(data)
      });
  }, []);

  return (
    <div className="container-A-carritoCompras">
      <div className="titleContainerLeft">
        <h1>Historial de Compras (25)</h1>
      </div>
      <section className="btnsContainer-Configuration">
        <button id="toDo" className=' boxBtnCarritoCompras' to="/Configuracion-de-Cuenta">
            <Vistaprodcarrito state={state} />
        </button>
      </section>

    </div>
  );
}

export default SidebarLateral;
