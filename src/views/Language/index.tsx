import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RadioButton } from 'react-native-paper';

import { ELanguage } from '~/@types/entities/Language';
import { HOME_SCREEN } from '~/constants/routes';

import * as S from './styles';

type Props = NativeStackScreenProps<any, 'LoginScreen'>;

export function Language({ navigation }: Props) {
  const { t, i18n } = useTranslation();

  const [checked, setChecked] = useState<ELanguage>(ELanguage.pt);

  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
  }

  function selectLanguage(language: ELanguage) {
    setChecked(language);
    i18n.changeLanguage(language);
  }

  return (
    <S.SafeArea>
      <S.Container>
        <S.ContainerHeader>
          <S.TextTitle>{t('content:texts.language')}</S.TextTitle>
        </S.ContainerHeader>
        <S.ContainerListRadio>
          <S.ContainerRadio>
            <RadioButton
              value="pt"
              status={checked === 'pt' ? 'checked' : 'unchecked'}
              onPress={() => selectLanguage(ELanguage.pt)}
            />
            <S.TextLabel>{t('content:texts.portuguese')}</S.TextLabel>
          </S.ContainerRadio>

          <S.ContainerRadio>
            <RadioButton
              value="es"
              status={checked === 'es' ? 'checked' : 'unchecked'}
              onPress={() => selectLanguage(ELanguage.es)}
            />
            <S.TextLabel>{t('content:texts.spanish')}</S.TextLabel>
          </S.ContainerRadio>

          <S.ContainerRadio>
            <RadioButton
              value="en"
              status={checked === 'en' ? 'checked' : 'unchecked'}
              onPress={() => selectLanguage(ELanguage.en)}
            />
            <S.TextLabel>{t('content:texts.english')}</S.TextLabel>
          </S.ContainerRadio>
        </S.ContainerListRadio>
        <S.ContainerButton>
          <S.Button
            accessibilityLabel={t('content:accessibleContent.confirm-label')}
            onPress={() => handleLogin()}
          >
            <S.ButtonText>{t('content:buttons.confirm')}</S.ButtonText>
          </S.Button>
        </S.ContainerButton>
      </S.Container>
    </S.SafeArea>
  );
}
