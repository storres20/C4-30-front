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
          <SidebarLink  href="#infoSection" onClick={toggle}>
              Quienes somos
          </SidebarLink>
          <SidebarLink to='services' href="#serviciosSection"  onClick={toggle}>
              Servicios
          </SidebarLink>
          <SidebarLink to='testimony' href="#reconocimientoSection" onClick={toggle}>
              Testimonios
          </SidebarLink>
          <SidebarLink to='sucursales' href="#sucursalesSection" onClick={toggle}>
              Sucursales
          </SidebarLink>
        </SidebarMenu>
        <SideBtWrap>
          <SidebarRoute to='/Inicio-Sesion' onClick={toggle}>
            Ingresa Aquí
          </SidebarRoute>
        </SideBtWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
