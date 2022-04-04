import React, {useState} from 'react'
import NavBar from './componentes/NavBarSobreVerede'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './componentes/SidebarSobreVerede/Index'
import PortadaSection from './componentes/Portada';
import InfoSection from './componentes/Informacion';
import Services from './componentes/Servicios';
import Reconocimiento from './componentes/Reconocimiento';
import Sucursales from './componentes/Sucursales';


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