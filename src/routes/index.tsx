import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { HOME_SCREEN, LANGUAGE_SCREEN } from '~/constants/routes';
import Theme from '~/themes';
import { Home } from '~/views/Home';
import { Language } from '~/views/Language';

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ThemeProvider theme={Theme.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={LANGUAGE_SCREEN}>
            <Stack.Screen
              name={LANGUAGE_SCREEN}
              component={Language}
              options={{ headerShown: false }}
            />
            <Stack.Screen name={HOME_SCREEN} component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
