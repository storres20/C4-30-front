import React, { useState } from "react";
import "./VPH.scss";
import "./InfoModal.scss";
import axios from "axios"
//import Cat from './Cat'

//import imagen from "../imagenes/img.svg"
import bag from "../imagenes/bag.svg";
import bagbold from "../imagenes/bagbold.svg";
import heart from "../imagenes/heart.svg";
import heartbold from "../imagenes/heartbold.svg";
import clock from "../imagenes/clock.svg";
//import burger from "../imagenes/burger.svg"
//import pizza from "../imagenes/pizza.svg"
import info from "../imagenes/info.svg";
import Swal from 'sweetalert2';
/* import axios from "axios"; */

export default function VPH({ prod, categorias }) {
  const [isHeart, setIsHeart] = useState(false);
  const buttonHeart = () => {
    setIsHeart((current) => !current);
  };

  const [isBag, setIsBag] = useState(false);

  const buttonBag = () => {
    const user = localStorage.getItem("user");
    setIsBag((current) => !current);

    if (!isBag && user) {
      axios.post(`https://country-app-v3.herokuapp.com/orders/${localStorage.getItem("id")}`, {
        state: "sin pagar",
        products: {
          ...prod,
        },
      });
    }
  };

  let categoria;
  if (categorias) {
    categoria = categorias.find((e) => e.id === prod.category_id);
  }

  return (
    <div className="contenedorVPH">
      <img src={prod.image} alt="imagen" />
      <h4 className={`postexto ${prod.state === "disponible" ? "hidden" : ""}`}>
        AGOTADO
      </h4>

      <div className="contenedorTexto">
        <div className="flex1">
          <div className="flex2">
            <h1>{prod.name} </h1>
            
            <button
              className="btnInfo"
              onClick={() => Swal.fire({
                html:
                  `<article class="modalDescripcion">
                    <section class="tittleInfo">
                      <h3>DESTALLES DEL PRODUCTO</h3>
                    </section>
                    <section class="imgInfo">
                      <img src=${prod.image} alt="producto" />
                    </section>

                    <section class="nameInfo">
                      <h5>${prod.name.toUpperCase()}</h5>
                    </section>

                    <section class="detailsInfo"> 
                      <p> <strong> Descripción: </strong> ${prod.description} </p>
                      <p> <strong> Categoría: </strong> ${categoria && categoria.name} </p>
                      <p> <strong> Estado: </strong> ${prod.state} </p>
                    </section>
                    <section class="precioInfo">
                    <h6>S/. ${prod.price}</h6>
                  </section>
                  </article>`,                
                allowOutsideClick: false,
                stopKeydownPropagation: false,
                showCloseButton: true,
                showConfirmButton: false,
                closeButtonAriaLabel: 'cerrar alerta',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp',
                },
              })}
              type="button"
            >
            <img className="iconinfo" src={info} alt="info" />
            </button>
          </div>
          <div className="btnsProductVPH">
            <img
              className="iconheart"
              src={isHeart ? heartbold : heart}
              alt="heart"
              onClick={buttonHeart}
            />
            <img
              className="iconbag"
              src={isBag ? bagbold : bag}
              alt="bag"
              onClick={buttonBag}
            />
          </div>
        </div>

        <div className="flex2">
          <img className="iconclock" src={clock} alt="clock" />
          <h2>{prod.time_preparation}</h2>
          <h2>$ {prod.price}</h2>
        </div>

        <div className="flex2">
          <div className="flex3">
            <img
              className="icon"
              src={categoria && categoria.image}
              alt=""
            />
            <h3>{categoria && categoria.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
