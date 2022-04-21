import React from "react";

import "./Vistaprodhistorial.scss";

import VPHL from "./VPHL/VPHL";

export default function Vistaprodhistorial({ state, setState }) {
  return (
    <div className="flex0">
      {/* Estos VPC luego pueden ser mapeados con la data de la API */}
      {state?.map((item) => (
        <VPHL {...item} key={item.id} state={state} setState={setState} />
      ))}
    </div>
  );
}
