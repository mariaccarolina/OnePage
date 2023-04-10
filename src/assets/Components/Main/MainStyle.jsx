import styled from "styled-components";


export const Card = styled.div`
width: 30%;
box-shadow: 0px 0px 20px 0px #0000001A;
@media screen and (max-width:900px){
  width: 90%;
  align-items: center;
  margin: 20px;
}
`
export const Texto =styled.p`
padding: 30px;
color: #555555;
`
export const Titulo = styled.h2`
padding: 20px 0 0 30px;
`
export const Color = styled.div`
width: 100%;
height: 222px;
background-color: #FF6363;

`
export const CardColor = styled.div`
height: 222px;
background-color:#63ECFF;
`
export const Colorroxo = styled.div`
height: 222px;
background-color:#F363FF;
`
export const ColorVerde = styled.div`
height: 222px;
background-color:#63FF73;
`
export const ColorAmarelo = styled.div`
height: 222px;
background-color:#FFDD63;`

export const ColorAzul = styled.div`
height: 222px;
background-color:#6663FF;`

export const Container = styled.div`
display: flex;
width: 100%;
height: 50vw;
align-items: center;
justify-content: space-evenly;

@media screen and (max-width:900px){
  display: grid;
  height: auto;
}
`
export const ContainerCard = styled.div`
display: flex;
padding-bottom: 50px;
align-items: center;
justify-content: space-evenly;
@media screen and (max-width:900px){
  display: grid;
}
`