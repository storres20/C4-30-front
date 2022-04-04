import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtWrap, SidebarRoute
} from './SidebarElement'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
              Quienes somos
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
              Servicios
          </SidebarLink>
          <SidebarLink to='testimony' onClick={toggle}>
              Testimonios
          </SidebarLink>
          <SidebarLink to='sucursales' onClick={toggle}>
              Sucursales
          </SidebarLink>
        </SidebarMenu>
        <SideBtWrap>
          <SidebarRoute to='/Sobre-Verede' onClick={toggle}>
            Ingresa Aquí
          </SidebarRoute>
        </SideBtWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
