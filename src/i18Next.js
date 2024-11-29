
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // .use(initReactI18next)
  // .init({
  //   debug: true,
  //   fallbackLng: 'en',
  //   interpolation: {
  //     escapeValue: false, // not needed for react as it escapes by default
  //   },
  //   // language resources
  //   resources: {
  //     en: {
  //       translation: {
  //        welcome: "Welcome to React"
  //       }
  //     },
  //     ep: {
  //       translation: {
  //        welcome: "Bienvenido"
  //       }
  //     },
  //   }
  // });
  .use(LanguageDetector)
  .use(Backend)  
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',  // Default language if no translation found
    debug: true,         // Optional, enables debug logging
    backend: {
      loadPath: '/locale/{{lng}}/translation.json',  // Path to load translations
    },
    interpolation: {
      escapeValue: false,  // React escapes values automatically
    },
  });


export default i18n;