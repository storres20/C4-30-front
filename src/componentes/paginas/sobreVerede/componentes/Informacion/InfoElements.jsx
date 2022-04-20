import styled from "styled-components";

export const InfoContainer = styled.section`
  /* height: 800px; */
  /* height: 508px; */
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  align-items: center;
  background: background:#ffff;;
  padding: 5rem 0;
  @media screen and (max-width: 768px) {
    height: 700px;
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
    /* height: 512px; */
    height: 100%;
  }
`;

export const InfoSubtitulo = styled.p`
  color: hsla(228, 28%, 20%, 1);
  font-size: medium;
  text-align: center;
  padding: 1rem 0;
  max-width: 900px;
/*   @media screen and (max-width: 480px) {
    padding: 2rem 3rem;
  } */
`;

export const InfoH1 = styled.h1`
  font-size: 2.5rem;
  color: hsla(228, 28%, 20%, 1);

  margin-bottom: 2rem;
  @media screen and (max-width: 480px) {
    margin: 2rem;
  }
`;
