import React from 'react';
import "antd/dist/antd.css";
import "../../contenedores/HistorialCompras.scss";
import tipo from "../../constantes/images";


function FormCuentaUser() {

  return (
    <section className='boxPrincipalDetalleCompra'>
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
              <label >
                <p><span className="textDatos-CC">Nombres :</span> Rosamaria </p>
                <p><span className="textDatos-CC">Apellidos :</span> Gutierrez</p>
                <p><span className="textDatos-CC">Dirección :</span> Oscar Benavides 3008</p>
                <label className="boxNumTarjeta textDatos-CC">
                  <p><span className="textDatos-CC">Número de Tarjeta :</span> **********5432</p>
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
              <label >
                <p><span className="textDatos-CC">Fecha :</span> 20/02/2022 </p>
                <p><span className="textDatos-CC">Hora :</span> 15:02 hrs</p>
                <div className="boxProductosDetallesCarritoCompras">
                  <table class="contenedorTablaProductos">
                    <tr>
                      <th>Productos</th>
                      <th>Unds</th>
                      <th className='precio'>Precio($)</th>
                    </tr>
                    <tr>
                      <td>Item 1</td>
                      <td>4</td>
                      <td>15.80</td>
                    </tr>
                    <tr>
                      <td>Item 1</td>
                      <td>4</td>
                      <td>15.80</td>
                    </tr>
                    <tr>
                      <td>Item 1</td>
                      <td>4</td>
                      <td>15.80</td>
                    </tr>
                  </table>
                </div>
              </label>

            </div>
            
          </div>
        </div>
        <div className="btnsContainer">
            <div className="boxPrecioTotalCompra">
              <h3>Precio Total</h3>
              <h2>$16.80 </h2>
            </div>
          </div>
        </div>
    </section>
  )
}

export default FormCuentaUser