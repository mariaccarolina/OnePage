import React from 'react';
import * as S from "./FooterStyle"

export default function Footer() {
   return(
    <S.Container>
    <S.Title>Entre em contato</S.Title>
    <S.Formulario action="">
      <S.Imput type="text"  placeholder='Nome'/>
      <S.Imput type="email" name="" id="" placeholder='E-mail'/>
      <S.Imput type="tel" placeholder='Telefone'/>
      <S.Text name="" id="" cols="30" rows="10" placeholder='Mensagem...'></S.Text>
    </S.Formulario>
    <S.Btn>Enviar mensagem</S.Btn>
    </S.Container>
   )
}