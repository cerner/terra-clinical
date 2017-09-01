// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default error view': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/error-view-tests/default`)
      .assert.elementPresent('#ErrorView');
  },

  'Displays an error view with text for name and description': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/error-view-tests/text`)
      .assert.containsText('#ErrorView p', 'test name. test description');
  },

  'Displays an error with a button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/error-view-tests/button`)
      .assert.elementPresent('#ErrorView button')
      .assert.containsText('#ErrorView button', 'test button');
  },

  'Displays an error view with glyph hidden': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/error-view-tests/hidden`)
      .assert.elementNotPresent('#ErrorView svg');
  },
});
