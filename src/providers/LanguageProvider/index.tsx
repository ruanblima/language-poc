import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useCallback, useEffect } from 'react';
import { createContext, useContext } from 'use-context-selector';

import { ELanguage } from '~/@types/entities/Language';

interface LanguageContextProps {
  language: ELanguage;
}

const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps,
);
const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState(ELanguage.pt);

  async function toggleLanguage(newLanguage: ELanguage) {
    setLanguage(newLanguage);
    await AsyncStorage.setItem('@language', newLanguage);
  }
  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguageContext() {
  const context = useContext(LanguageContext);
  return context;
}

export { LanguageProvider, useLanguageContext };
