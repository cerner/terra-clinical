import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

addLocaleData(localeData);

const messages = {
  "Terra.Clinical.ActionHeader.close": "Fechar",
  "Terra.Clinical.ActionHeader.back": "Voltar",
  "Terra.Clinical.ActionHeader.previous": "Anterior",
  "Terra.Clinical.ActionHeader.next": "Próximo",
  "Terra.Clinical.ActionHeader.maximize": "Maximizar",
  "Terra.Clinical.ActionHeader.minimize": "Minimizar",
  "Terra.ajax.error": "Falha ao carregar conteúdo."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'pt',
  messages,
};