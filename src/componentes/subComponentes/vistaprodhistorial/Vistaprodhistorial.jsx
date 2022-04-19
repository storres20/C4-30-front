import React, { useEffect, useState } from "react";

import "./Vistaprodhistorial.css";

import VPHL from "./VPHL/VPHL";
import axios from "axios";

export default function Vistaprodhistorial() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://country-app-v3.herokuapp.com/buy/${localStorage.getItem("id")}`)
      .then((data) => setState(data));
  }, []);

  console.log(state);

  return (
    <div className="flex0">
      {/* Estos VPC luego pueden ser mapeados con la data de la API */}
      <VPHL />
      <VPHL />
      <VPHL />
      <VPHL />
    </div>
  );
}
