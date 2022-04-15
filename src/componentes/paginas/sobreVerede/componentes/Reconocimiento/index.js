import React from 'react'
import Icon4 from '../../../registro-InicioSesion/imagenes/icon8.png'
import Testimonio1 from '../../../../../imagenes/Testimonios/Testimonio1.jpg'
import Testimonio2 from '../../../../../imagenes/Testimonios/Testimonio2.jpg'
import Testimonio3 from '../../../../../imagenes/Testimonios/Testimonio3.jpg'
import {ReconocimientoContainer, ReconocimientoH1, ReconocimientoWrapper,ReconocimientoCard, ReconocimientoIcon,ReconocimientoH2,ReconocimientoP,ReconocimientoEstrellas,ReconocimientoIconEstrellas} from './ReconocimientoElements'

function Reconocimiento() {
  return (
    <div id='reconocimientoSection'>
      <ReconocimientoContainer>
        <ReconocimientoH1>Reconocimientos</ReconocimientoH1>
          <ReconocimientoWrapper>
            <ReconocimientoCard>
              <ReconocimientoIcon src={Testimonio1}/>
                <ReconocimientoH2>Dra. Lucía Smith</ReconocimientoH2>
                <ReconocimientoP>Ser vegetariano implica la ausencia de algunos nutrientes y de no llevarse de forma inteligente puede provocar graves daños. Abalo que Veridé tiene un cuidado en el balance nutriólogo para sus platillos.</ReconocimientoP>
                <ReconocimientoEstrellas>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                </ReconocimientoEstrellas>
            </ReconocimientoCard>
            <ReconocimientoCard>
              <ReconocimientoIcon src={Testimonio2}/>
                <ReconocimientoH2>Ing. Rubén Diaz</ReconocimientoH2>
                <ReconocimientoP>Mi alimentación en términos generales siempre fue sana (dentro de lo posible), pero lo fue aún más a raíz de una operación que tuvo mi papá en el colon. Después de eso, mi familia y yo decidimos mejorar nuestra salud y empezamos cambiando nuestra alimentación y fue así que conocimos a Veridé y sus platillos deliciosos.</ReconocimientoP>
                <ReconocimientoEstrellas>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                  <ReconocimientoIconEstrellas src={Icon4}/>
                </ReconocimientoEstrellas>
            </ReconocimientoCard>
            <ReconocimientoCard>
              <ReconocimientoIcon src={Testimonio3}/>
                <ReconocimientoH2>Bióloga Sofía Cartlan</ReconocimientoH2>
                <ReconocimientoP>Mi transición al veganismo fue bastante sencilla y conocí a Veridé; nunca imaginé que la comida vegana fuese tan rica. Me mentalice y cambié mi manera de ver el mundo y mi estilo de vida. Siempre amé a los animales.</ReconocimientoP>
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
    </div>
    
  )
}

export default Reconocimiento
