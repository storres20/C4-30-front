import React from 'react'
import Icon1 from '../../imagenes/icon5.png'
import Icon2 from '../../imagenes/icon6.png'
import Icon3 from '../../imagenes/icon7.png'
import {ServicesContainer, ServicesH1, ServicesWrapper,ServicesCard, ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'

function Services() {
  return (
    <ServicesContainer>
      <ServicesH1>Servicios</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
              <ServicesH2>Delivery</ServicesH2>
              <ServicesP>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
              <ServicesH2>Delivery</ServicesH2>
              <ServicesP>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
              <ServicesH2>Delivery</ServicesH2>
              <ServicesP>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services