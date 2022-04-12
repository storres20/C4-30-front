import styled from 'styled-components'

export const ReconocimientoContainer =styled.div`

  height: 800px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  /* background: #010606; */
  background: #E5E5E5;

  @media screen and (max-width: 768px){
    height: 1500px;
  }

`
export const  ReconocimientoH1 =styled.h1`
  font-size:2.5rem;
  color:hsla(228, 28%, 20%, 1);
;
  margin-bottom:64px;
  @media screen and (max-width: 480px) {
    font-size:2rem;
  }
`
export const ReconocimientoWrapper =styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  /* grid-gap: 16px; */
  grid-gap:49px;
  padding: 0 50px;

  @media screen and (max-width:1000px) {
    grid-template-columns:1fr 1fr;
  }

  @media screen and (max-width:768px) {
    grid-template-columns:1fr;
  }
`
export const ReconocimientoCard =styled.div`
  background:#ffff;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items:center;
  border-radius:10px;
/*   max-height:340px; */
  padding:30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform:scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;

  }


`
export const ReconocimientoIcon =styled.img`
  height:160px;
  width:160px;
  margin-bottom:10px;
`
export const ReconocimientoH2 =styled.h2`

  font-size: medium;
  margin-bottom:10px;

`
export const ReconocimientoP =styled.p`
   font-size:small;
   text-align:center;
`

export const ReconocimientoEstrellas =styled.div`
   display: flex;
    font-size: 0.5;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`
export const ReconocimientoIconEstrellas =styled.img`
   font-size: 0.5rem;
  width: 2rem;
   /* text-align:center; */
`