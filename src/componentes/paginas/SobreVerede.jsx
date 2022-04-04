import React, {useState} from 'react'
import NavBar from './registro-InicioSesion/componentes/NavBarSobreVerede'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './registro-InicioSesion/componentes/SidebarSobreVerede/Index'
import PortadaSection from './registro-InicioSesion/componentes/Portada';
import InfoSection from './registro-InicioSesion/componentes/Informacion';
import Services from './registro-InicioSesion/componentes/Servicios';
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
      <PortadaSection />
      <InfoSection />
      <Services />
      <Reconocimiento />
      <Sucursales />
    </div>
  )
}

export default SobreVerede
