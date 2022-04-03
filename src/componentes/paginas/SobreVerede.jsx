import React, {useState} from 'react'
import NavBar from './registro-InicioSesion/componentes/NavBar'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './registro-InicioSesion/componentes/Sidebar/Index'
import HeroSection from './registro-InicioSesion/componentes/HeroSection';
import InfoSection from './registro-InicioSesion/componentes/InfoSection';
import Services from './registro-InicioSesion/componentes/Services';
import Reconocimiento from './registro-InicioSesion/componentes/Reconocimiento';
import Sucursales from './registro-InicioSesion/componentes/Sucursales';

function SobreVerede() {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle= {toggle}/>
      <NavBar toggle= {toggle}/>
      <HeroSection />
      <InfoSection />
      <Services />
      <Reconocimiento />
      <Sucursales />
    </div>
  )
}

export default SobreVerede
