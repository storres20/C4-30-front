import React from "react";

import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";
import "./estilos/VPHL.scss";
import { useNavigate } from "react-router-dom";

export default function VPHL({ id, amount, created_at, setState, state }) {
  const buy_id = id;
  const navigate = useNavigate();

  const handleClick = () => {
    axios
      .get(`https://country-app-v3.herokuapp.com/buy/show/${buy_id}`)
      .then((data) => {
        navigate(`/historial-de-compras/${id}`);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://country-app-v3.herokuapp.com/buy/${buy_id}`)
      .then(() => {
        setState(state.filter((p) => p.id !== id));
      });
  };

  return (
    <div className="contenedorVPHL">
      <div className="flex-VPHL">
{/*         <p className="equis" onClick={handleDelete}>
          X
        </p> */}
        <div className="contenedorTextoVPHL" onClick={handleClick}>
          <div className="flex1">
            <div>
              <h1>
                Fecha:{"  "}
                <Moment format="DD-MM-YYYY" locale="es">
                  {created_at}
                </Moment>
              </h1>
              <h1 style={{ marginLeft: "-12px" }}>Estado: Entregado</h1>
            </div>
          </div>

          <div className="contenedorPM">
            <div className="flex22">
              <h3>Total a Pagar</h3>
              <h4>$ {amount}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
