import styled from 'styled-components'

export const ProductosContainer =styled.div`

  height: 100%;
  padding: 5rem;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  background: #E5E5E5;

  @media screen and (max-width: 480px) {
    padding: 5rem 1rem;
  }

`
export const  ProductosH1 =styled.h1`
  font-size:2.5rem;
  color:hsla(228, 28%, 20%, 1);
;
  margin-bottom:64px;
  @media screen and (max-width: 480px) {
    font-size:2rem;
    margin: 64px;
  }
`
export const ProductosWrapper =styled.div`


  @media screen and (max-width:480px) {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`
