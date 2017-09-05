// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a divided Detail View with provided components': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/detail-view-tests/detail-view-divided`)
      .assert.elementPresent('#DetailView hr');
  },

  'Displays a Detail View that is not divided with provided components': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/detail-view-tests/detail-view-no-divider`)
      .assert.elementNotPresent('#DetailView hr');
  },
});
