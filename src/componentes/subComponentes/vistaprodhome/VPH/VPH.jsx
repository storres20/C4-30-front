import React, { useState } from 'react'

import './VPH.scss'
//import axios from "axios";
//import Cat from './Cat'

//import imagen from "../imagenes/img.svg"
import bag from "../imagenes/bag.svg"
import bagbold from "../imagenes/bagbold.svg"
import heart from "../imagenes/heart.svg"
import heartbold from "../imagenes/heartbold.svg"
import clock from "../imagenes/clock.svg"
import burger from "../imagenes/burger.svg"
import pizza from "../imagenes/pizza.svg"
import info from "../imagenes/info.svg"

export default function VPH({ prod }) {

  const [isHeart, setIsHeart] = useState(false)
  const buttonHeart = () => {
    setIsHeart(current => !current)
  }

  const [isBag, setIsBag] = useState(false)
  const buttonBag = () => {
    setIsBag(current => !current)
  }

  // mostrar CATEGORIAS desde la API
  /* const [categorias, setCategorias] = useState([]);
  const cargarCategorias = ({ prod }) => {
    axios
      .get("https://country-app-v3.herokuapp.com/categories")
      .then((data) => {
        //console.log(data.data)

        //Data de Categorias al useState
        setCategorias(data.data)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    cargarCategorias();
  }, []); */


  return (
    <div className='contenedorVPH'>
      <img src={prod.image} alt="imagen" />
      <h4 className={`postexto ${(prod.state === "disponible") ? "hidden" : ""}`}>AGOTADO</h4>

      <div className='contenedorTexto'>
        <div className='flex1'>
          <div className='flex2'>
            <h1>{prod.name} </h1>
            <img className='iconinfo' src={info} alt="info" />
          </div>
          <div>
            <img className='iconheart' src={isHeart ? heartbold : heart} alt="heart" onClick={buttonHeart} />
            <img className='iconbag' src={isBag ? bagbold : bag} alt="bag" onClick={buttonBag} />

          </div>
        </div>

        <div className='flex2'>
          <img className='iconclock' src={clock} alt="clock" />
          <h2>{prod.time_preparation}</h2>
          <h2>$ {prod.price}</h2>
        </div>

        <div className='flex2'>
          <div className='flex3'>
            <img className='icon' src={burger} alt="burger" />
            <h3>{prod.category_id}</h3>
          </div>
          <div className='flex3'>
            <img className='icon' src={pizza} alt="pizza" />
            <h3>Pizza</h3>
          </div>
        </div>
      </div>

    </div>
  )
}
