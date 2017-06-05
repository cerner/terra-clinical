import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/es';

addLocaleData(localeData);

const messages = {
  "Terra.Clinical.ActionHeader.close": "Cerrar",
  "Terra.Clinical.ActionHeader.back": "Retroceder",
  "Terra.Clinical.ActionHeader.previous": "Anterior",
  "Terra.Clinical.ActionHeader.next": "Siguiente",
  "Terra.Clinical.ActionHeader.maximize": "Maximizar",
  "Terra.Clinical.ActionHeader.minimize": "Minimizar",
  "Terra.ajax.error": "Error al cargar el contenido."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'es',
  messages,
};