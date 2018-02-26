// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Renders the Application with provided AppDelegate': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-application/default-application`)
      .assert.elementPresent('#Application')
      .assert.containsText('.test-ContainerComponent', 'App is present');
  },

  'Renders the Application without provided AppDelegate': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-application/no-app-delegate-application`)
      .assert.elementPresent('#Application')
      .assert.containsText('.test-ContainerComponent', 'App is not present');
  },
});
