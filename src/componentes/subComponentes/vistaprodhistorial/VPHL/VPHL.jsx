import React from "react";

import "./VPHL.css";

export default function VPHL() {
  return (
    <div className="contenedorVPHL">
      <div className="flex-VPHL">
        <p className="equis">X</p>
        <div className="contenedorTextoVPHL">
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
