import React from "react";
import { Switch } from "antd";
import Swal from 'sweetalert2';
import "antd/dist/antd.css";
import "../../contenedores/ConfiguracionCuenta.scss";

function FormDireccionUser() {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const modalGuardarDatosUsuario = () => {
    Swal.fire({
      text: '¿Está seguro que desea actualizar sus datos?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Datos Actualizados con éxito!',
          text: 'El pedido fue enviado a cocina con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
/*         if (camposVacios() !== false) {
          Swal.fire({
            title: '¡Datos Actualizados con éxito!',
            text: 'El pedido fue enviado a cocina con éxito',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });
        } */ /* else if (camposVacios() === false) {
          Swal.fire({
            title: '¡Data sin Actualizar!',
            text: 'No se pudo completar la actualización por falta de datos',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
          });
        } */
      }
    });
  };

  const modalCancelarDatosUsuario = () => {
    Swal.fire({
      text: '¿Está seguro de cancelar la actualización de sus datos?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta',
    }).then((result) => {
      if (result.isConfirmed) {        
          Swal.fire({
            title: '¡Acción cancelada con éxito!',
            text: 'Sus datos volverán a la última actualización',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });
      }
    });
  };

  const modalCerrarSesionUsuario = () => {
    Swal.fire({
      text: '¿Está seguro que desea cerrar sesión?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡La Sesión fue finalizada con éxito!',
          text: 'Vuelva pronto a Veridé',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

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
        <button className="btnCerrarSesion" onClick={() => modalCerrarSesionUsuario()}>Cerrar Sesión</button>
            <div>
              <button className="btnCancelar" onClick={() => modalCancelarDatosUsuario()} >Cancelar</button>
              <button className="btnGuardar" onClick={() => modalGuardarDatosUsuario()}>Guardar</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FormDireccionUser;
