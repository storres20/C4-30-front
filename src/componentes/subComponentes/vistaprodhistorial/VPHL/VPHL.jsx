import React from "react";

import "./VPHL.css";
import axios from "axios";

export default function VPHL({ id }) {
  const buy_id = id

  const handleClick = () => {
    window.location.pathname = `/historial-de-compras/${id}`

    axios.get(`https://country-app-v3.herokuapp.com/buy/show/${buy_id}`).then((data) => {
      console.log(data);
    });
  };

  const handleDelete = () => {
    axios.delete(`https://country-app-v3.herokuapp.com/buy/${buy_id}`).then((data) => {
      console.log(data);
    });
  }

  return (
    <div className="contenedorVPHL">
      <div className="flex-VPHL">
        <p className="equis" onClick={handleDelete}>X</p>
        <div className="contenedorTextoVPHL"  onClick={handleClick}>
          <div className="flex1">
            <div>
              <h1>Fecha: 25/04/2022</h1>
              <h1>Estado: Entregado</h1>
            </div>
          </div>

          <div className="contenedorPM">
            <div className="flex22">
              <h3>Total a Pagar</h3>
              <h4> $24</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
