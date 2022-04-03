import React, { useState } from 'react'

import './Vistaprodhome.css'

import imagen from "./imagenes/img.svg"
import bag from "./imagenes/bag.svg"
import bagbold from "./imagenes/bagbold.svg"
import heart from "./imagenes/heart.svg"
import heartbold from "./imagenes/heartbold.svg"
import clock from "./imagenes/clock.svg"
import burger from "./imagenes/burger.svg"
import pizza from "./imagenes/pizza.svg"
import info from "./imagenes/info.svg"

export default function Vistaprodhome() {

  const [isHeart, setIsHeart] = useState(false)
  const buttonHeart = () => {
    setIsHeart(current => !current)
  }

  const [isBag, setIsBag] = useState(false)
  const buttonBag = () => {
    setIsBag(current => !current)
  }
  
  const [isImg, setIsImg] = useState(false)
  const buttonImg = () => {
    setIsImg(current => !current)
  }

  return (
    <div className='contenedorVPH'>
      <img src={imagen} alt="imagen" onClick={buttonImg} />
      <h4 className={`postexto ${isImg ? "hidden" : ""}`}>AGOTADO</h4>

      <div className='contenedorTexto'>
        <div className='flex1'>
          <div className='flex2'>
            <h1>Burgers & Pizza</h1>
            <img className='iconinfo' src={info} alt="info" />
          </div>
          <div>
            <img className='iconheart' src={isHeart ? heartbold : heart} alt="heart" onClick={buttonHeart} />
            <img className='iconbag' src={isBag ? bagbold : bag} alt="bag" onClick={buttonBag} />

          </div>
        </div>

        <div className='flex2'>
          <img className='iconclock' src={clock} alt="clock" />
          <h2>40-60 min</h2>
          <h2>$24</h2>
        </div>

        <div className='flex2'>
          <div className='flex3'>
            <img className='icon' src={burger} alt="burger" />
            <h3>Burger</h3>
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
