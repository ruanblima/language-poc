import type { Resource } from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { enContent, enAcessibilityContent } from './locales/en';
import { esContent, esAcessibilityContent } from './locales/es';
import { ptContent, ptAcessibilityContent } from './locales/pt';

const languages = {
  pt: 'pt',
  en: 'en',
  es: 'es',
};

const namespaces = {
  content: 'content',
  accessibleContent: 'accessibleContent',
};

const resources: Resource = {
  pt: {
    content: ptContent,
    accessibleContent: ptAcessibilityContent,
  },
  en: {
    content: enContent,
    accessibleContent: enAcessibilityContent,
  },
  es: {
    content: esContent,
    accessibleContent: esAcessibilityContent,
  },
};

i18n.use(initReactI18next).init({
  resources,
  ns: [namespaces.content, namespaces.accessibleContent],
  defaultNS: namespaces.content,
  lng: languages.pt,
  fallbackLng: languages.pt,
});

export default i18n;
