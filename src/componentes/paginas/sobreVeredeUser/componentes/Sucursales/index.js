import React from 'react'
import Icon1 from '../../../registro-InicioSesion/imagenes/icon9.png'
// import Icon2 from '../../imagenes/icon6.png'
// import Icon3 from '../../imagenes/icon7.png'
import {SucursalesContainer, SucursalesH1, SucursalesWrapper,SucursalesCard, SucursalesIcon,SucursalesH2,SucursalesP} from './SucursalesElements'

function Sucursales() {
  return (
    <div id='sucursalesSection'>
      <SucursalesContainer>
        <SucursalesH1>Sucursales</SucursalesH1>
          <SucursalesWrapper>
            <SucursalesCard>
              <SucursalesIcon src={Icon1}/>
                <SucursalesH2>Perú-Lima</SucursalesH2>
                <SucursalesP>Direccion: 20, Av. José Pardo 620, Miraflores 15074, Perú, Lima</SucursalesP>
            </SucursalesCard>
            <SucursalesCard>
              <SucursalesIcon src={Icon1}/>
                <SucursalesH2>Argentina-Buenos Aires</SucursalesH2>
                <SucursalesP>Direccion: Balcarce 958, C1064 AAT, Buenos Aires, Argentina </SucursalesP>
            </SucursalesCard>
            <SucursalesCard>
              <SucursalesIcon src={Icon1}/>
                <SucursalesH2>México-Santiago de Querétaro</SucursalesH2>
                <SucursalesP>Direccion: C. 5 de Mayo 99 A, Santiago de Querétaro, México</SucursalesP>
            </SucursalesCard>
          </SucursalesWrapper>
      </SucursalesContainer>
    </div>
  )
}


export default Sucursales