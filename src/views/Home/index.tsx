import React from 'react';

import { body, body2 } from './constants';

import * as S from './styles';

export function Home() {
  return (
    <S.SafeArea>
      <S.Container>
        <S.ContainerHeader>
          <S.TextTitle>Quem Somos</S.TextTitle>
        </S.ContainerHeader>

        <S.TextBody>{body}</S.TextBody>

        <S.TextBody>{body2}</S.TextBody>
      </S.Container>
    </S.SafeArea>
  );
}
