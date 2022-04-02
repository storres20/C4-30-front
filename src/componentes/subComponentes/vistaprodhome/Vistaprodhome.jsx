import React from 'react'

import './Vistaprodhome.css'

import imagen from "./imagenes/img.svg"
import bag from "./imagenes/bag.svg"
import heart from "./imagenes/heart.svg"
import clock from "./imagenes/clock.svg"
import burger from "./imagenes/burger.svg"
import pizza from "./imagenes/pizza.svg"

export default function Vistaprodhome() {
  return (
    <div className='contenedorVPH'>
      <img src={imagen} alt="imagen" />

      <div className='contenedorTexto'>
        <div className='flex1'>
          <h1>Burgers & Pizza</h1>
          <div>
            <img className='iconheart' src={heart} alt="heart" />
            <img className='iconbag' src={bag} alt="bag" />
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
