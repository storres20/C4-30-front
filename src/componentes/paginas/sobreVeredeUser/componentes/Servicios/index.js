import React from 'react'
import Icon1 from '../../../registro-InicioSesion/imagenes/icon5.png'
import Icon2 from '../../../registro-InicioSesion/imagenes/icon6.png'
import Icon3 from '../../../registro-InicioSesion/imagenes/icon7.png'
import {ServiciosContainer, ServiciosH1, ServiciosWrapper,ServiciosCard, ServiciosIcon,ServiciosH2,ServiciosP} from './ServiciosElements'

function Servicios() {
  return (
    <div id='serviciosSection'>
      <ServiciosContainer>
        <ServiciosH1>Servicios</ServiciosH1>
          <ServiciosWrapper>
            <ServiciosCard>
              <ServiciosIcon src={Icon1}/>
                <ServiciosH2>Delivery</ServiciosH2>
                <ServiciosP>En Veredé siempre es hora de comer. Prueba nuestro sabor único y tradicional. Entra a nuestra web y haz tu pedido. </ServiciosP>
            </ServiciosCard>
            <ServiciosCard>
              <ServiciosIcon src={Icon2}/>
                <ServiciosH2>Eventos</ServiciosH2>
                <ServiciosP>Siempre a tu servicio. Veredé ha conquistado a los paladares más exigentes .Junto a Veredé puedes realizar eventos familiares exclusivos de comida vegana. </ServiciosP>
            </ServiciosCard>
            <ServiciosCard>
              <ServiciosIcon src={Icon3}/>
                <ServiciosH2>Atención Personalizada</ServiciosH2>
                <ServiciosP> Veredé ha conquistado a los paladares más exigentes. Llegamos dispuestos a deleitarlo y a brindarle un excelente servicio personalizado</ServiciosP>
            </ServiciosCard>
          </ServiciosWrapper>
      </ServiciosContainer>
    </div>
    
  )
}

export default Servicios