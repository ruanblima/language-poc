import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.WHITE};
  justify-content: center;
`;

export const ContainerHeader = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.Colors.BLUE};
  font-size: 55px;
`;

export const TextLabel = styled.Text`
  color: ${({ theme }) => theme.Colors.TEXT};
  font-size: 20px;
`;

export const ContainerListRadio = styled.View`
  justify-content: center;
  margin-bottom: 5px;
  align-items: flex-start;
  margin-left: 30px;
`;

export const ContainerRadio = styled.View`
  justify-content: center;
  margin-bottom: 5px;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
  font-size: 20px;
`;

export const ContainerButton = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.Colors.BLUE};
`;
