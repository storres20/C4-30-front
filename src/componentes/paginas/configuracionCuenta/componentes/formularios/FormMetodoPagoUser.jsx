import React from 'react';
import { Switch } from "antd";
import "antd/dist/antd.css";
import "../../contenedores/ConfiguracionCuenta.scss";

function FormMetodoPagoUser() {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <div className="container-B">
        <div className="titleContainer">
          <h1>Método de Pago</h1>
        </div>

        <div className="subtitleContainer">
          <h3>Conección con Tarjetas</h3>
        </div>

        <div>
          <div className="flex-Inputs inputsContainer">
            <div>
              <label>
                <span className="textInput">N° de la tarjeta</span>
                <input
                  className="inputCG"
                  required="true"
                  type="text"
                  placeholder="Ingrese n° de la tarjeta*"
                />
              </label>
              <section className='flex-CG--MP'>
              <label className='label-CG-MP'>
                <span className="textInput">Expiración</span>
                <input
                  className="inputCG"
                  required="true"
                  type="email"
                  placeholder="Mes/Año*"
                />
              </label>
              <label className='label-CG-MP'>
                <span className="textInput">CVV</span>
                <input
                  className="inputCG"
                  required="true"
                  type="email"
                  placeholder="CVV*"
                />
              </label>
              </section>
            </div>
            <div>
              <label>
                <span className="textInput">Correo</span>
                <input
                  className="inputCG"
                  required="true"
                  type="email"
                  placeholder="nombre@ejemplo.com*"
                />
              </label>
              <label>
                <span className="textInput">Correo Electrónico</span>
                <input
                  className="inputCG"
                  required="true"
                  type="email"
                  placeholder="nombre@ejemplo.com*"
                />
              </label>
            </div>
          </div>
          <div className="btnsOptionalContainer">
            <div>
              <label>
                <span className="textInput">¿Desea incluir el 10% de propina?</span>
                <Switch defaultChecked onChange={onChange} />
              </label>
              <label>
                <span className="textInput">¿Desea brindar propina en efectivo?</span>
                <Switch defaultChecked onChange={onChange} />
              </label>
            </div>
          </div>
          <div className="btnsContainer">
            <button className="btnCerrarSesion">Cerrar Sesión</button>
            <div>
              <button className="btnCancelar">Cancelar</button>
              <button className="btnGuardar">Guardar</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FormMetodoPagoUser