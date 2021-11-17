import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import './i18n';
import 'intl-pluralrules';

import { RootStack } from '~/routes';

export function App() {
  return (
    <PaperProvider>
      <RootStack />
    </PaperProvider>
  );
}
