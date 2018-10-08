 import React from 'react';
 import IconSettings from 'terra-icon/lib/icon/IconSettings';

 export default {
   'accessory': <IconSettings />,
   'menuItems': {
      'key': 'menu',
      'title': 'Settings',
      'childKeys': {
         'Locale': {
            'key': 'Locale',
            'title': 'Locale: en',
            'childKeys': {
               'ar': {
                  'key': 'ar',
                  'title': 'ar',
                  'isSelected': false,
                  'isSelectable': true
               },
               'en': {
                  'key': 'en',
                  'title': 'en',
                  'isSelected': true,
                  'isSelectable': true
               },
               'en-US': {
                  'key': 'en-US',
                  'title': 'en-US',
                  'isSelected': false,
                  'isSelectable': true
               },
               'en-GB': {
                  'key': 'en-GB',
                  'title': 'en-GB',
                  'isSelected': false,
                  'isSelectable': true
               },
               'es': {
                  'key': 'es',
                  'title': 'es',
                  'isSelected': false,
                  'isSelectable': true
               },
               'es-US': {
                  'key': 'es-US',
                  'title': 'es-US',
                  'isSelected': false,
                  'isSelectable': true
               },
               'es-ES': {
                  'key': 'es-ES',
                  'title': 'es-ES',
                  'isSelected': false,
                  'isSelectable': true
               },
               'de': {
                  'key': 'de',
                  'title': 'de',
                  'isSelected': false,
                  'isSelectable': true
               },
               'fi-FI': {
                  'key': 'fi-FI',
                  'title': 'fi-FI',
                  'isSelected': false,
                  'isSelectable': true
               },
               'fr': {
                  'key': 'fr',
                  'title': 'fr',
                  'isSelected': false,
                  'isSelectable': true
               },
               'fr-FR': {
                  'key': 'fr-FR',
                  'title': 'fr-FR',
                  'isSelected': false,
                  'isSelectable': true
               },
               'nl': {
                  'key': 'nl',
                  'title': 'nl',
                  'isSelected': false,
                  'isSelectable': true
               },
               'nl-BE': {
                  'key': 'nl-BE',
                  'title': 'nl-BE',
                  'isSelected': false,
                  'isSelectable': true
               },
               'pt': {
                  'key': 'pt',
                  'title': 'pt',
                  'isSelected': false,
                  'isSelectable': true
               },
               'pt-BR': {
                  'key': 'pt-BR',
                  'title': 'pt-BR',
                  'isSelected': false,
                  'isSelectable': true
               },
               'sv': {
                  'key': 'sv',
                  'title': 'sv',
                  'isSelected': false,
                  'isSelectable': true
               },
               'sv-SE': {
                  'key': 'sv-SE',
                  'title': 'sv-SE',
                  'isSelected': false,
                  'isSelectable': true
               }
            }
         },
         'Bidi': {
            'key': 'Bidi',
            'title': 'Bidi: undefined',
            'childKeys': {
               'ltr': {
                  'key': 'ltr',
                  'title': 'ltr',
                  'isSelected': false,
                  'isSelectable': true
               },
               'rtl': {
                  'key': 'rtl',
                  'title': 'rtl',
                  'isSelected': false,
                  'isSelectable': true
               }
            }
         }
      }
   },
   'initialSelectedKey': 'menu',
   'onChange': (event, {key, metaData}) => {
      metaData.onChange(key);
   }
};
