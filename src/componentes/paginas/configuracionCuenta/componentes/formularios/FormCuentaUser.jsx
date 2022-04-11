import React from 'react';
import { Switch } from "antd";
import "antd/dist/antd.css";
import "../../contenedores/ConfiguracionCuenta.scss";

function FormCuentaUser() {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <div className="container-B">
        <div className="titleContainer">
          <h1>Cuenta</h1>
        </div>

        <div className="subtitleContainer">
          <h3>Información Personal</h3>
        </div>

        <div>
          <div className="flex-Inputs inputsContainer">
            <div>
              <label>
                <span className="textInput">Nombre</span>
                <input
                  className="inputCG"
                  required="true"
                  type="text"
                  placeholder="Ingresa tu nombre*"

                />
              </label>
              <label>
                <span className="textInput">Correo</span>
                <input
                  className="inputCG"
                  required="true"
                  type="email"
                  placeholder="nombre@ejemplo.com*"
                />
              </label>
            </div>
            <div>
              <label>
                <span className="textInput">Apellidos</span>
                <input
                  className="inputCG"
                  required="true"
                  type="text"
                  placeholder="Ingresa tus apellidos*"
                />
              </label>
              <label>
                <span className="textInput">Número Telefónico</span>
                <input
                  className="inputCG"
                  required="true"
                  type="text"
                  placeholder="Ingresa tu número telefónico*"
                />
              </label>
            </div>
          </div>
          <div className="btnsOptionalContainer">
            <div>
              <label>
                <span className="textInput">¿Te gustaría recibir notificaciones sobre novedades a tu correo electrónico?</span>
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

export default FormCuentaUser