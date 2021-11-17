import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styles';

export function Home() {
  const { t } = useTranslation();

  return (
    <S.SafeArea>
      <S.Container>
        <S.ContainerHeader>
          <S.TextTitle>{t('content:texts.about_us')}</S.TextTitle>
        </S.ContainerHeader>

        <S.TextBody>{t('content:texts.text_about_us')}</S.TextBody>
      </S.Container>
    </S.SafeArea>
  );
}
