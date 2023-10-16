import React from 'react';
// import axios from 'axios';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import App from './components/App';
import resources from './locales/index.js';

const init = () => {
  const i18n = i18next.createInstance();

  /* await axios.post('/api/v1/login', { username: 'admin', password: 'admin' })
  .then((response) => {
    console.log(response.data);
  }); */

  i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
    });

  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
};

export default init;
