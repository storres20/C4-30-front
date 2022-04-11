import React, {useState} from 'react'
import NavBar from './componentes/NavBarSobreVerede'
import {BrowserRouter as Router} from 'react-router-dom'
import {Sidebar,PortadaSection,InfoSection,Servicios, Reconocimiento,Sucursales} from './componentes'
import Footer from '../../subComponentes/footer/Footer'

function SobreVerede() {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <div>
      <Sidebar  isOpen={isOpen} toggle= {toggle}/>
      <NavBar toggle= {toggle}/>
      <PortadaSection />
      <InfoSection />
      <Servicios />
      <Reconocimiento />
      <Sucursales path='sucursales'/>
      <Footer />
    </div>
  )
}

export default SobreVerede