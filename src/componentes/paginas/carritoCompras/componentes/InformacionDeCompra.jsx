import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import "antd/dist/antd.css";
import "../contenedores/CarritoCompras.scss";
import tipo from "../constantes/images";
import axios from "axios";

function FormCuentaUser({ state, props, user }) {

  const [productos, setProductos] = useState([]);
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/historial-de-compras/${localStorage.getItem("id")}`);
  };
  const modalGuardarDatosUsuario = () => {
    axios.post(`https://country-app-v3.herokuapp.com/buy/${localStorage.getItem("id")}`, {
      ...state,
    });

    Swal.fire({
      text: "¿Está seguro de confirmar su compra?",
      showCancelButton: true,
      confirmButtonColor: "#57a057",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: "cerrar alerta",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Compra realizada con éxito!",
          text: "Su compra estará próxima a entrega",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        handleClick(props);
      }
    });
    
    //Limpiar el carrito una vez hecha la compra
      axios
        .put(`https://country-app-v3.herokuapp.com/orders/clear/$${localStorage.getItem("id")}`,)
  };

  const modalCancelarDatosUsuario = () => {
    Swal.fire({
      text: "¿Estás seguro de cancelar tu compra?",
      showCancelButton: true,
      confirmButtonColor: "#57a057",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: "cerrar alerta",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Acción cancelada con éxito!",
          text: "Sus datos volverán a la última actualización",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //Fecha para "Detalles del Pedido"
  const date = new Date();
  const [day, month, year] = [date.getDate(), date.getMonth()+1, date.getFullYear()];
  const [hour, minute] = [date.getHours(), date.getMinutes()];

  //Get de los productos del carrito actual
  useEffect(() => {
    axios
      .get(`https://country-app-v3.herokuapp.com/orders/${localStorage.getItem("id")}`)
      .then(({ data }) => {
        setProductos(data);
      });
  }, []);

  //Suma del total de los productos del carrito
  let precio;
  if (productos.length !== 0) {
    precio = productos.map(p => p.products.price).reduce((prev, curr) => prev + curr);
  };

  return (
    <section className="boxPrincipalDetalleCompra">
      <div className="container-B container-B-CarritoCompra">
        <div className="titleContainer">
          <h1>Información de la Compra</h1>
        </div>

        <div className="subtitleContainer">
          <h3>Detalles del Cliente</h3>
        </div>

        <div>
          <div className="flex-Inputs inputsContainer container-detallesProducto-CC">
            <div>
              <label>
                <p>
                  <span className="textDatos-CC">Nombres :</span> {user.name}
                </p>
                <p>
                  <span className="textDatos-CC">Apellidos :</span>{user.last_name}
                </p>
                <p>
                  <span className="textDatos-CC">Dirección :</span> {user.direction}
                </p>
                <label className="boxNumTarjeta textDatos-CC">
                  <p>
                    <span className="textDatos-CC">Número de Tarjeta :</span>{user.card_number}
                  </p>
                  <label className="e-btn" htmlFor="radioVisa">
                    <img src={tipo.visa} alt="Tarjeta-Visa" />
                  </label>
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="container-B container-B-CarritoCompra">
        <div className="subtitleContainer">
          <h3>Detalles del Pedido</h3>
        </div>

        <div>
          <div className="flex-Inputs inputsContainer container-detallesProducto-CC container-parte-B">
            <div>
              <label>
                <p>
                  <span className="textDatos-CC">Fecha :</span> {day}/{month}/{year}
                </p>
                <p>
                  <span className="textDatos-CC">Hora :</span> {hour}:{minute < 10 ? "0"+minute : minute} hs
                </p>
                <div className="boxProductosDetallesCarritoCompras">
                  <table className="contenedorTablaProductos">
                    <tbody>
                      <tr>
                        <th>Productos</th>
                        <th>Unidades</th>
                        <th className="precio">Precio($)</th>
                      </tr>
                    {productos && productos.map((item) =>
                      <tr>
                        <td>{item.products.name}</td>
                        <td>{item.products.count}</td>
                        <td>{item.products.price}.00</td>
                      </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="btnsContainer">
          <div className="boxPrecioTotalCompra">
            <h3>Precio Total</h3>
            <h2>${precio ? precio+".00" : "0.00"}</h2>
          </div>
          <div className="btnsCarritoCompras">
            <button
              className="btnCancelar"
              onClick={() => modalCancelarDatosUsuario()}
            >
              Cancelar
            </button>
            <button
              className="btnGuardar"
              onClick={() => modalGuardarDatosUsuario()}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormCuentaUser;
