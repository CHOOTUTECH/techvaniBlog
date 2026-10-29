// src/context/AppContext.tsx
import { createContext } from 'react';

export const LanguageContext = createContext({
  language: 'hi' as 'hi' | 'en',
  toggleLanguage: () => {},
});

export const ModalContext = createContext({
  openCheatSheet: () => {},
  openVideoTutorial: () => {},
});