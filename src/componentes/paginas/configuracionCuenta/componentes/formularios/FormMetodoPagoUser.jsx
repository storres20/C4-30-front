import React from "react";
import { Switch } from "antd";
import Swal from 'sweetalert2';
import tipo from "../../constantes/images";
import "antd/dist/antd.css";
import "../../contenedores/ConfiguracionCuenta.scss";

function FormMetodoPagoUser() {
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
        <h1>Método de Pago</h1>
      </div>

      <div className="subtitleContainer">
        <h3>Conección con Tarjetas</h3>
      </div>

      <div>
      <section className="tipoTarjetas">
              <span className="textInput">Tipo de Tarjeta</span>
              <section className="e-btn-group">
                <div className="flex-TP">
                  <div>
                    <input
                      type="radio"
                      id="radioVisa"
                      name="align"
                      value="visa"
                    />
                    <label className="e-btn" htmlFor="radioVisa">
                      <img src={tipo.visa} alt="Tarjeta" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="radioDiners"
                      name="align"
                      value="diners"
                    />
                    <label className="e-btn" htmlFor="radioDiners">
                      <img src={tipo.diners} alt="Tarjeta" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="radioMaster"
                      name="align"
                      value="right"
                    />
                    <label className="e-btn" htmlFor="radioMaster">
                      <img src={tipo.master} alt="Tarjeta" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="radioAmerican"
                      name="align"
                      value="american"
                    />
                    <label className="e-btn" htmlFor="radioAmerican">
                      <img src={tipo.american} alt="Tarjeta" />
                    </label>
                  </div>
                </div>
              </section>
            </section>
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

          </div>
          <div>
          <section className="flex-CG--MP">
              <label className="label-CG-MP">
                <span className="textInput">Expiración</span>
                <input
                  className="inputCG"
                  required="true"
                  type="email"
                  placeholder="Mes/Año*"
                />
              </label>
              <label className="label-CG-MP">
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
        </div>

        <div className="btnsOptionalContainer">
          <div>
            <label>
              <span className="textInput">
                ¿Desea incluir el 10% de propina?
              </span>
              <Switch defaultChecked onChange={onChange} />
            </label>
            <label>
              <span className="textInput">
                ¿Desea brindar propina en efectivo?
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

export default FormMetodoPagoUser;
