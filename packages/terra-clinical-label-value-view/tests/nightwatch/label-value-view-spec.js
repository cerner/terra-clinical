// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default LabelValueView when no value input is provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/label-value-view-tests/default`)
      .assert.elementPresent('#LabelValueView');
  },

  'Displays a LabelValueView when a text input is provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/label-value-view-tests/text-value`)
      .assert.elementPresent('#LabelValueView');
  },

  'Displays a LabelValueView when a node input is provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/label-value-view-tests/element-value`)
      .assert.elementPresent('#child');
  },

  'Displays a LabelValueView when text and node input is provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/label-value-view-tests/multiple-values`)
      .assert.elementPresent('#child');
  },
});
