// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays text as default': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/item-display-tests/default`)
      .assert.elementPresent('#ItemDisplay');
  },

  'Displays text with different styles': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-display-tests/text-style`);
    browser.expect.element('#test-display-secondary > :first-child').to.have.css('color').which.equals('rgba(100, 105, 108, 1)');
    browser.expect.element('#test-display-attention > :first-child').to.have.css('color').which.equals('rgba(204, 0, 0, 1)');
    browser.expect.element('#test-display-strike-through > :first-child').to.have.css('text-decoration').which.contains('line-through');
  },

  'Displays text with an icon': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/item-display-tests/icon`)
      .assert.elementPresent('#ItemDisplay [class*="inline-icon"]');
  },

  'Icon scales as font-size adjusts': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-display-tests/scaling`);
    browser.assert.elementPresent('#Default');
    browser.assert.elementPresent('#Larger');
    browser.assert.elementPresent('#Smaller');
  },
});
