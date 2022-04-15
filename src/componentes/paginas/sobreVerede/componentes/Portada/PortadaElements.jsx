import styled from 'styled-components'

export const PortadaContainer = styled.div`
background:#E5E5E5;
display:flex;
justify-content: center;
align-items: center;
padding: 0 30px;
/* height: 800px; */
height: 834px;
position:relative;
z-index: 1;
`

export const PortadaBg = styled.div `
position: absolute;
top: 0 ;
right: 0 ;
bottom: 0;
left: 0;
width: 100%;
/* height:100%; */
height: 68%;
overflow:hidden;

:before {
  content:"";
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: linear-gradient(180deg, rgba(0,0,0,0,2) 0%),rgba(0,0,0,0,6) 100%,linear-gradient(180deg, rgba(0,0,0,0,2) 0%,transparent 100%);
  z-index:2;
  background: rgba(0,0,0,0.5);
  
}
@media screen and (max-width: 1096px){
  height:100%
}
`

export const VideoBg = styled.video `
  width:100%;
  height:100%;
  -o-object-fit:cover;
  object-fit: cover;

  @media screen and (max-width: 480px){
  }

`
export const PortadaContent = styled.div `
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
export const PortadaH1 = styled.h1 `
  color:#ffff;
  font-size:48px;
  text-aling:center;
  display:flex;
  justify-content: center;
  align-items: center;
`
export const PortadaImg = styled.img `
  width: 50%;
`
export const PortadaP = styled.p `
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
export const PortadaBoxs = styled.div `
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
    /* gap: 1.5rem;
    margin-top: 2rem; */
    gap: 1rem 8rem;
    margin-top: 1rem;
  }
`
export const PortadaBox = styled.div  `
  background-color: #CE972B;
  border-radius: 8px;
  width: 20rem;
  height: 12rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  align-content: flex-start;
  padding: 1.3rem;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  @media screen and (max-width: 768px){
    width: 18rem;
    height: 9rem;
  }
  @media screen and (max-width: 480px){
    width: 100%;
    height: 9rem;
  }
`

export const PortadaIcon = styled.img `
  width: 23%;
  @media screen and (max-width: 768px){
    width: 18%;
  }
`

export const PortadaH2 = styled.h2 `
  padding-left: 0vw;
  font-weight: 600;


  @media screen and (max-width: 768px){
    margin-bottom: 0em;
  }
  @media screen and (max-width: 480px){

  }
`

export const PortadaP2 = styled.p `
  font-size: 13px;
  color:white;
  font-weight: 400;
  @media screen and (max-width: 768px){
    font-size: 11px;
  } 
`