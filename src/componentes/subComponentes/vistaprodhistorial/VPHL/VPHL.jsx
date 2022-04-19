import React from "react";

import "./VPHL.scss";

export default function VPHL() {
/*   const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://country-app-v3.herokuapp.com/buy/${localStorage.getItem("id")}`)
      .then((data) => setState(data));
  }, []);

  console.log(state); */
  return (
    <div className="flex0">
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
    </div>
  );
}
