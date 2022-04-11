import React from 'react'
import Icon1 from '../../../registro-InicioSesion/imagenes/icon5.png'
import Icon2 from '../../../registro-InicioSesion/imagenes/icon6.png'
import Icon3 from '../../../registro-InicioSesion/imagenes/icon7.png'
import Icon4 from '../../../registro-InicioSesion/imagenes/icon8.png'
import {ReconocimientoContainer, ReconocimientoH1, ReconocimientoWrapper,ReconocimientoCard, ReconocimientoIcon,ReconocimientoH2,ReconocimientoP,ReconocimientoEstrellas,ReconocimientoIconEstrellas} from './ReconocimientoElements'

function Reconocimiento() {
  return (
    <ReconocimientoContainer>
      <ReconocimientoH1>Reconocimientos</ReconocimientoH1>
        <ReconocimientoWrapper>
          <ReconocimientoCard>
            <ReconocimientoIcon src={Icon1}/>
              <ReconocimientoH2>Delivery</ReconocimientoH2>
              <ReconocimientoP>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</ReconocimientoP>
              <ReconocimientoEstrellas>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
              </ReconocimientoEstrellas>
          </ReconocimientoCard>
          <ReconocimientoCard>
            <ReconocimientoIcon src={Icon2}/>
              <ReconocimientoH2>Delivery</ReconocimientoH2>
              <ReconocimientoP>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</ReconocimientoP>
              <ReconocimientoEstrellas>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
              </ReconocimientoEstrellas>
          </ReconocimientoCard>
          <ReconocimientoCard>
            <ReconocimientoIcon src={Icon3}/>
              <ReconocimientoH2>Delivery</ReconocimientoH2>
              <ReconocimientoP>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</ReconocimientoP>
              <ReconocimientoEstrellas>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
                <ReconocimientoIconEstrellas src={Icon4}/>
              </ReconocimientoEstrellas>
          </ReconocimientoCard>
        </ReconocimientoWrapper>
    </ReconocimientoContainer>
  )
}

export default Reconocimiento
