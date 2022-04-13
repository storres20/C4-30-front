import {React, useState} from 'react'

import "./Categorias.scss";


export default function Categorias({ prod }) {

  // Solo para probar el cambio de color de la CATEGORIA al dar click
  const [isClick, setIsClick] = useState(false)
  const buttonClick = () => {
    setIsClick(current => !current)
  }
  
  
  return (
    <div>
      <div className={`contenedor ${isClick ? "click" : ""}`} onClick={buttonClick}>
        <img className="imgCat" src={prod.image} alt="imagen" />
        <p className='textCat'>{prod.name}</p>
      </div>
    </div>
  )
}
