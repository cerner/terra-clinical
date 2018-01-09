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
    browser.expect.element('#test-display-secondary > :first-child').to.have.css('color').which.equals('rgba(117, 118, 125, 1)');
    browser.expect.element('#test-display-attention > :first-child').to.have.css('color').which.equals('rgba(204, 0, 0, 1)');
    browser.expect.element('#test-display-strike-through > :first-child').to.have.css('text-decoration').which.contains('line-through');
    browser.expect.element('#test-display-strong > :first-child').to.have.css('font-weight').which.equals('700');
  },

  'Displays disabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-display-tests/disabled`);
    browser.expect.element('#test-display-text > :first-child').to.have.css('opacity').which.equals('0.18');
    browser.expect.element('#test-display-icon [class*="inline-icon"]').to.have.css('color').which.equals('rgba(117, 118, 125, 0.3)');
    browser.expect.element('#test-display-icon > :first-child').to.have.css('opacity').which.equals('0.18');
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
