import styled from "styled-components";

export const Container = styled.div`
background-color: #D7D4FF;
display: flex;
align-items: center;
justify-content: space-around;
@media screen and (max-width:900px){
    flex-direction: column;
}
`
export const Info = styled.div`
width: 30%;
@media screen and (max-width:900px){
    width: 80%;
    padding-top: 50px;
}
`
export const Imagem = styled.img`
width: 100%;

`
export const Figure = styled.figure`
padding: 40px;
width: 500px;
@media screen and (max-width:900px){
    padding: 0;
    width: 80%;
    margin: 70px;
}
`
export const Btn = styled.button`
background-color: #6C63FF;
box-shadow: 0px 5px 5px 0px #1717171A;
border: none;
border-radius: 5px;
color: white;
padding: 10px 35px;
margin-top: 30px;
cursor: pointer;
`
export const Texto = styled.p`
font-size: 19px;
font-weight: 400;
margin-top: 18px;
color: #555555;
`