import styled from 'styled-components'

export const HeroContainer = styled.div`
/* background: #f9f9f9; */
background:#ffff;
display:flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position:relative;
z-index: 1;

:before {
  content:"";
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: linear-gradient(180deg, rgba(0,0,0,0,2) 0%),rgba(0,0,0,0,6) 100%,linear-gradient(180deg, rgba(0,0,0,0,2) 0%,transparent 100%);
  z-index:2;
}
`

export const HeroBg = styled.div `
position: absolute;
top: 0 ;
right: 0 ;
bottom: 0;
left: 0;
width: 100%;
/* height:100%; */
height: 68%;
overflow:hidden;
@media screen and (max-width: 1096px){
  height:100%
}
`

export const VideoBg = styled.video `
  width:100%;
  height:100%;
  -o-object-fit:cover;
  object-fit: cover;
  /* background: #232323b5; */

  @media screen and (max-width: 480px){
  }

`
export const HeroContent = styled.div `
  top: 6rem;
  z-index:3;
  max-width: 1200px;
  position:absolute;
  padding: 8px 24px;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media screen and (max-width: 768px){
    top: 2rem;
  }
  @media screen and (max-width: 480px){
    top: 2rem;
  }
`
export const HeroH1 = styled.h1 `
  color:#ffff;
  font-size:48px;
  text-aling:center;

  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`
export const HeroP = styled.p `
  margin-top:24px;
  color: #fff;
  font-size: 24px;
  text-align:center;
  max-width: 600px;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }
  @media screen and (max-width: 480px){
    font-size: 18px;
  }

`
export const HeroBoxs = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  gap: 3rem;
  margin-top: 6rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    gap: 1.5rem;
    margin-top: 2rem;
  }
  @media screen and (max-width: 480px){
    gap: 1.5rem;
    margin-top: 2rem;
  }
`
export const HeroBox = styled.div  `
  background-color: #f46532;
  border-radius: 8px;
  width: 20rem;
  height: 12rem;
  @media screen and (max-width: 768px){
    width: 18rem;
    height: 9rem;
  }
  @media screen and (max-width: 480px){
    width: 17rem;
    height: 9rem;
  }
`