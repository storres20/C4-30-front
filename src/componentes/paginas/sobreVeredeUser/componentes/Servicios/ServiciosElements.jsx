import styled from "styled-components";

export const ServiciosContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
    height: 100%;
  }
`;
export const ServiciosH1 = styled.h1`
  font-size: 2.5rem;
  color: hsla(228, 28%, 20%, 1);
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin: 64px;
  }
`;
export const ServiciosWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  /* grid-gap: 16px; */
  grid-gap: 49px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServiciosCard = styled.div`
  background: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;
export const ServiciosIcon = styled.img`
  width: 5rem;
  margin: 0 0 2rem;
`;
export const ServiciosH2 = styled.h2`
  font-size: medium;
  margin-bottom: 10px;
`;
export const ServiciosP = styled.p`
  font-size: small;
  text-align: center;
`;
