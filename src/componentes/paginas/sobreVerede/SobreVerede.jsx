import React, {useState} from 'react'
import NavBar from './componentes/NavBarSobreVerede'
import Footer from '../../subComponentes/footer/Footer'
import PortadaSection from './componentes/Portada';
import InfoSection from './componentes/Informacion';
import Servicios from './componentes/Servicios';
import Reconocimiento from './componentes/Reconocimiento';
import Sucursales from './componentes/Sucursales';
import Sidebar from './componentes/SidebarSobreVerede/index';

function SobreVerede() {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle= {toggle} />
      <NavBar toggle= {toggle}/>
      <PortadaSection />
      <InfoSection />
      <Servicios />
      <Reconocimiento />
      <Sucursales />
      <Footer />
    </div>
  )
}

export default SobreVerede