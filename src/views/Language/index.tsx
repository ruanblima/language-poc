import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { HOME_SCREEN } from '~/constants/routes';

import * as S from './styles';

type Props = NativeStackScreenProps<'LoginScreen'>;

export function Language({ navigation }: Props) {
  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
  }

  return (
    <S.SafeArea>
      <S.Container>
        <S.ContainerHeader>
          <S.TextLogin>Language</S.TextLogin>
        </S.ContainerHeader>
        <S.ContainerInputs />
        <S.ContainerButton>
          <S.Button onPress={() => handleLogin()}>
            <S.ButtonText>CONFIRMAR</S.ButtonText>
          </S.Button>
        </S.ContainerButton>
      </S.Container>
    </S.SafeArea>
  );
}
