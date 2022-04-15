import React from "react";
import "../contenedores/CarritoCompras.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { FiUser, FiMapPin, FiCreditCard } from "react-icons/fi";
import { useState } from "react";
import Vistaprodcarrito from "../../../subComponentes/vistaprodcarrito/Vistaprodcarrito";

function SidebarLateral({setStatus}) {

  const [estadoOrdenes, setEstado] = useState('informacionPersonal');

  const informacionPersonal = () => {
    setEstado('informacionPersonal')
    setStatus('informacionPersonal');
  };

  const ubicacionEntrega = () => {
    setEstado('ubicacionEntrega');
    setStatus('ubicacionEntrega');
  };

  const coneccionTarjetas = () => {
    setEstado('coneccionTarjetas');
    setStatus('coneccionTarjetas');
  };
  
  
  return (
    <div className="container-A-carritoCompras">
      <div className="titleContainerLeft">
        <h1>Configuración</h1>
      </div>
      <section className="btnsContainer-Configuration">
        <button onClick={informacionPersonal} id="toDo" className={(estadoOrdenes === 'informacionPersonal') ? ' boxBtnCarritoCompras' : 'btnLeft-CG'} to="/Configuracion-Cuenta">
            {/* <label className="iconbtn-CG">
              <FiUser className="icon-React" />
            </label>
            <aside>
              <h3>Cuenta</h3>
              <p>Información Personal</p>
            </aside> */}
            <Vistaprodcarrito />
        </button>
        <div className=" btnsContainerCarritoCompras">
            <div>
              <button className="btnCerrarSesion btnLimpiarCarrito" >Limpiar Carrito</button>
            </div>
        </div>
      </section>
      
    </div>
  );
}

export default SidebarLateral;
