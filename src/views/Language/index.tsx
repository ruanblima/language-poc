import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

import { ELanguage } from '~/@types/entities/Language';
import { HOME_SCREEN } from '~/constants/routes';

import * as S from './styles';

type Props = NativeStackScreenProps<'LoginScreen'>;

export function Language({ navigation }: Props) {
  const [checked, setChecked] = useState<ELanguage>(ELanguage.pt);

  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
  }

  function selectLanguage(language: ELanguage) {
    setChecked(language);
  }

  return (
    <S.SafeArea>
      <S.Container>
        <S.ContainerHeader>
          <S.TextTitle>Language</S.TextTitle>
        </S.ContainerHeader>
        <S.ContainerListRadio>
          <S.ContainerRadio>
            <RadioButton
              value="pt"
              status={checked === 'pt' ? 'checked' : 'unchecked'}
              onPress={() => selectLanguage(ELanguage.pt)}
            />
            <S.TextLabel>Português</S.TextLabel>
          </S.ContainerRadio>

          <S.ContainerRadio>
            <RadioButton
              value="es"
              status={checked === 'es' ? 'checked' : 'unchecked'}
              onPress={() => selectLanguage(ELanguage.es)}
            />
            <S.TextLabel>Espanhol</S.TextLabel>
          </S.ContainerRadio>

          <S.ContainerRadio>
            <RadioButton
              value="en"
              status={checked === 'en' ? 'checked' : 'unchecked'}
              onPress={() => selectLanguage(ELanguage.en)}
            />
            <S.TextLabel>Inglês</S.TextLabel>
          </S.ContainerRadio>
        </S.ContainerListRadio>
        <S.ContainerButton>
          <S.Button onPress={() => handleLogin()}>
            <S.ButtonText>CONFIRMAR</S.ButtonText>
          </S.Button>
        </S.ContainerButton>
      </S.Container>
    </S.SafeArea>
  );
}
