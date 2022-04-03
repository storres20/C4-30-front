import React from 'react'
import Icon1 from '../../imagenes/icon9.png'
// import Icon2 from '../../imagenes/icon6.png'
// import Icon3 from '../../imagenes/icon7.png'
import {SucursalesContainer, SucursalesH1, SucursalesWrapper,SucursalesCard, SucursalesIcon,SucursalesH2,SucursalesP} from './SucursalesElements'

function Sucursales() {
  return (
    <SucursalesContainer>
      <SucursalesH1>Sucursales</SucursalesH1>
        <SucursalesWrapper>
          <SucursalesCard>
            <SucursalesIcon src={Icon1}/>
              <SucursalesH2>Delivery</SucursalesH2>
              <SucursalesP>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</SucursalesP>
          </SucursalesCard>
          <SucursalesCard>
            <SucursalesIcon src={Icon1}/>
              <SucursalesH2>Delivery</SucursalesH2>
              <SucursalesP>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</SucursalesP>
          </SucursalesCard>
          <SucursalesCard>
            <SucursalesIcon src={Icon1}/>
              <SucursalesH2>Delivery</SucursalesH2>
              <SucursalesP>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</SucursalesP>
          </SucursalesCard>
        </SucursalesWrapper>
    </SucursalesContainer>
  )
}


export default Sucursales