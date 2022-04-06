import React from "react";
import { Switch } from "antd";
import "antd/dist/antd.css";
import "../../contenedores/ConfiguracionCuenta.scss";

function FormDireccionUser() {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <div className="container-B">
      <div className="titleContainer">
        <h1>Dirección</h1>
      </div>

      <div className="subtitleContainer">
        <h3>Ubicación de entrega</h3>
      </div>

      <div>
        <div className="flex-Inputs inputsContainer">
          <div>
            <label>
              <span className="textInput">Distrito </span>
              <input
                className="inputCG"
                required="true"
                type="text"
                placeholder="Ingresa tu distrito*"
              />
            </label>
            <label>
              <span className="textInput">N° Casa/Dpto</span>
              <input
                className="inputCG"
                required="true"
                type="email"
                placeholder="Ingresa tu n° de casa o dpto.*"
              />
            </label>
          </div>
          <div>
            <label>
              <span className="textInput">Dirección</span>
              <input
                className="inputCG"
                required="true"
                type="text"
                placeholder="Ingresa tu dirección*"
              />
            </label>

            <label>
              <span className="textInput">Referencia </span>
              <input
                className="inputCG"
                required="false"
                type="text"
                placeholder="Ingresa un lugar de referencia*"
              />
            </label>
          </div>
        </div>
        <div className="btnsOptionalContainer">
          <div>
            <label>
              <span className="textInput">
                ¿Te gustaría que toquen el timbre al llegar su pedido?
              </span>
              <Switch defaultChecked onChange={onChange} />
            </label>
            <label>
              <span className="textInput">
                ¿Te gustaría que le escribamos al llegar su pedido?
              </span>
              <Switch defaultChecked onChange={onChange} />
            </label>
            <label>
              <span className="textInput">
                ¿Te gustaría que le llamemos al llegar su pedido?
              </span>
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
  );
}

export default FormDireccionUser;
