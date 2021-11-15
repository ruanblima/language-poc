import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';

import en from './en';
import es from './es';
import pt from './pt';

async function getData() {
  try {
    const language: string | null = await AsyncStorage.getItem('@language');
    if (language !== null) {
      return language;
    }
    return 'pt';
  } catch (e) {
    return 'pt';
  }
}
const language = getData();

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        ...en,
      },
    },
    es: {
      translation: {
        ...es,
      },
    },
    pt: {
      translation: {
        ...pt,
      },
    },
  },
});

export default i18next;
