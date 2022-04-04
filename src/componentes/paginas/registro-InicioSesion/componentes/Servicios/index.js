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
              <ServicesP>En Veredé siempre es hora de comer. Prueba nuestro sabor único y tradicional. Entra a nuestra web y haz tu pedido. </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
              <ServicesH2>Eventos</ServicesH2>
              <ServicesP>Siempre a tu servicio. Veredé ha conquistado a los paladares más exigentes .Junto a Veredé puedes realizar eventos familiares exclusivos de comida vegana. </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
              <ServicesH2>Atención Personalizada</ServicesH2>
              <ServicesP> Veredé ha conquistado a los paladares más exigentes. Llegamos dispuestos a deleitarlo y a brindarle un excelente servicio personalizado</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services