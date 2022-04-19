import React from "react";

import "./Vistaprodhistorial.css";

import VPHL from "./VPHL/VPHL";

export default function Vistaprodhistorial({ state }) {

  return (
    <div className="flex0">
      {/* Estos VPC luego pueden ser mapeados con la data de la API */}
      {state?.map((item) => (
        <VPHL {...item} key={item.id} />
      ))}
    </div>
  );
}
