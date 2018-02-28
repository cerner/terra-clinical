// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default LabelValueView when no value input is provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-label-value-view/default-label-value-view`)
      .assert.elementPresent('#LabelValueView');
  },

  'Displays a LabelValueView when a text input is provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-label-value-view/text-value-label-value-view`)
      .assert.elementPresent('#LabelValueView');
  },

  'Displays a LabelValueView when a node input is provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-label-value-view/node-value-label-value-view`)
      .assert.elementPresent('#child');
  },

  'Displays a LabelValueView when text and node input is provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-label-value-view/multiple-value-label-value-view`)
      .assert.elementPresent('#child');
  },
});
