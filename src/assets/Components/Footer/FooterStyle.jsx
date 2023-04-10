import styled from "styled-components";

export const Container = styled.div`
background-color: #D7D4FF;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const Title = styled.h1`
color: #2B2B2B;
font-size: 32px;
padding-top: 40px;
`
export const Formulario = styled.form`
width: 40%;
@media screen and (max-width:900px){
    width: 90%;
}
`
export const Text = styled.textarea`
border: none;
border-radius: 6px;
width: 100%;
::placeholder{
  padding:20px;
  font-size: 18px;
}
`
export const Imput =styled.input`
display: block;
  width: 100%;
  border: none;
  margin: 15px 0;
  border-radius: 6px;
  height: 50px;
  ::placeholder{
    padding:20px;
  font-size: 18px; 
  }
`
export const Btn =styled.button`
width: 40%;
background-color: #6C63FF;
color: white;
border: none;
padding: 13px;
font-size: 20px;
margin: 20px;
border-radius: 6px;
@media screen and (max-width:900px){
    width: 90%;
}
`