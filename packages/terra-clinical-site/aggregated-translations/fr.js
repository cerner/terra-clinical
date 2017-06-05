import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fr';

addLocaleData(localeData);

const messages = {
  "Terra.Clinical.ActionHeader.close": "Fermer",
  "Terra.Clinical.ActionHeader.back": "Précédent",
  "Terra.Clinical.ActionHeader.previous": "Précédent",
  "Terra.Clinical.ActionHeader.next": "Suivant",
  "Terra.Clinical.ActionHeader.maximize": "Agrandir",
  "Terra.Clinical.ActionHeader.minimize": "Réduire",
  "Terra.ajax.error": "Échec du chargement du contenu."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'fr',
  messages,
};