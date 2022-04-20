import styled from 'styled-components'

export const ProductosContainer =styled.div`

  height: 100%;
  padding: 5rem;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  background: #E5E5E5;

/*   @media screen and (max-width: 480px) {
    padding: 5rem 1rem;
  } */

`
export const  ProductosH1 =styled.h1`
  font-size:2.5rem;
  color:hsla(228, 28%, 20%, 1);
;
  @media screen and (max-width: 480px) {
    font-size:2rem;
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
export const InfoContent = styled.p`
  color: hsla(228, 28%, 20%, 1);
  font-size: medium;
  text-align: center;
  padding-bottom: 3rem;
  max-width: 900px;
  @media screen and (max-width: 480px) {
    padding: 2rem 3rem;
  }
`;
