import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/de';

addLocaleData(localeData);

const messages = {
  "Terra.Clinical.ActionHeader.close": "Schließen",
  "Terra.Clinical.ActionHeader.back": "Zurück",
  "Terra.Clinical.ActionHeader.previous": "Vorherige",
  "Terra.Clinical.ActionHeader.next": "Nächste",
  "Terra.Clinical.ActionHeader.maximize": "Maximieren",
  "Terra.Clinical.ActionHeader.minimize": "Minimieren",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'de',
  messages,
};