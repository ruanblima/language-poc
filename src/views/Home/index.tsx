import React from 'react';

import i18next from '~/i18n';

import { body } from './constants';

import * as S from './styles';

export function Home() {
  return (
    <S.SafeArea>
      <S.Container>
        <S.ContainerHeader>
          <S.TextTitle>{i18next.t('about_us')}</S.TextTitle>
        </S.ContainerHeader>

        <S.TextBody>{i18next.t('text_about_us')}</S.TextBody>
      </S.Container>
    </S.SafeArea>
  );
}
