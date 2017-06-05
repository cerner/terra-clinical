import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';

addLocaleData(localeData);

const messages = {
  "Terra.Clinical.ActionHeader.close": "Close",
  "Terra.Clinical.ActionHeader.back": "Back",
  "Terra.Clinical.ActionHeader.previous": "Previous",
  "Terra.Clinical.ActionHeader.next": "Next",
  "Terra.Clinical.ActionHeader.maximize": "Maximise",
  "Terra.Clinical.ActionHeader.minimize": "Minimise",
  "Terra.ajax.error": "This content failed to load."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'en-GB',
  messages,
};