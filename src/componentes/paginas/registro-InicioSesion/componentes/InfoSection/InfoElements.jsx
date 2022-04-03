import styled from "styled-components";

export const InfoContainer = styled.nav `
  /* height: 800px; */
  height: 508px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  background: #E5E5E5;

  @media screen and (max-width: 768px){
    height: 700px;
  }

  @media screen and (max-width:480px) {
    /* height: 1300px; */
    height: 512px;
  }
`

export const InfoSubtitulo = styled.p `
  font-size:1rem;
  margin-bottom:10px;
  margin-top:24px;
  color: hsla(228, 28%, 20%, 1);
;
  font-size: 1rem;
  text-align:center;
  max-width: 900px;
`

export const InfoH1 = styled.h1 `
  font-size:2.5rem;
  color:hsla(228, 28%, 20%, 1);

  /* margin-bottom:64px; */
  margin-bottom: 56px;
  @media screen and (max-width: 480px) {
    font-size:2rem;
  }
`