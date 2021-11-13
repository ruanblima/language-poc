import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.WHITE};
  padding: 10px 20px;
`;

export const ContainerHeader = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.Colors.BLUE};
  font-size: 25px;
`;

export const TextBody = styled.Text`
  color: ${({ theme }) => theme.Colors.TEXT};
  font-size: 20px;
  text-align: justify;
`;
