// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  '@disable': true,
  'Displays a default no data view': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-no-data-view/default-no-data-view`)
      .assert.elementPresent('#NoDataView');
  },

  'Displays a no data view with text for name and description': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-no-data-view/text-no-data-view`)
      .assert.elementPresent('#NoDataView')
      .assert.containsText('#NoDataView p:nth-of-type(1)', 'test heading')
      .assert.containsText('#NoDataView p:nth-of-type(2)', 'test subtext');
  },

  'Displays a no data view with content': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-no-data-view/content-no-data-view`)
      .assert.containsText('#NoDataView p', 'content inserted here');
  },

  'Displays a no data view with glyph hidden': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-no-data-view/hidden-no-data-view`)
      .assert.elementNotPresent('#NoDataView svg');
  },
});
