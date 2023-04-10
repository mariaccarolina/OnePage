import React from 'react';
import * as S from './MainStyle'

export default function Main() {
   return(
    <>
    <S.Container>
    <S.Card>
      <S.Color></S.Color>
      <div>
         <S.Titulo>Título do card</S.Titulo>
         <S.Texto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</S.Texto>
      </div>
    </S.Card>
    
    <S.Card>
      <S.CardColor></S.CardColor>
      <div>
         <S.Titulo>Título do card</S.Titulo>
         <S.Texto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</S.Texto>
      </div>
    </S.Card>
    <S.Card>
      <S.Colorroxo></S.Colorroxo>
      <div>
         <S.Titulo>Título do card</S.Titulo>
         <S.Texto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</S.Texto>
      </div>
    </S.Card>
    </S.Container>

    <S.ContainerCard>
    <S.Card>
      <S.ColorVerde></S.ColorVerde>
      <div>
         <S.Titulo>Título do card</S.Titulo>
         <S.Texto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</S.Texto>
      </div>
    </S.Card>
    <S.Card>
      <S.ColorAmarelo></S.ColorAmarelo>
      <div>
         <S.Titulo>Título do card</S.Titulo>
         <S.Texto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</S.Texto>
      </div>
    </S.Card>
    <S.Card>
      <S.ColorAzul></S.ColorAzul>
      <div>
         <S.Titulo>Título do card</S.Titulo>
         <S.Texto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</S.Texto>
      </div>
    </S.Card>
    </S.ContainerCard>
    </>
   )
}