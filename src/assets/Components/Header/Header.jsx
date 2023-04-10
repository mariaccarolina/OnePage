import React from 'react';
import * as S from './HeaderStyle'

export default function Header() {
   return(
    <S.Container>
      <S.Info>
         <h1>Lorem ipsum dolor sit amet</h1>
         <S.Texto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</S.Texto>
         <S.Btn>Botão</S.Btn>
      </S.Info>
     <S.Figure>
      <S.Imagem src="https://one-page-codelandia.vercel.app/assets/ilustracao.svg" alt="presente" />
     </S.Figure>
    </S.Container>
   )
}