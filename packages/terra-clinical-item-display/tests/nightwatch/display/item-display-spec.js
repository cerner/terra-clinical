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
    browser.assert.cssProperty('#test-display-secondary > :first-child', 'color', 'rgba(100, 105, 108, 1)'); // Browser computes #64696c to rgba(100, 105, 108, 1)
    browser.assert.cssProperty('#test-display-attention > :first-child', 'color', 'rgba(204, 0, 0, 1)'); // Browser computes #c00 to rgba(204, 0, 0, 1)
    browser.assert.cssProperty('#test-display-strike-through > :first-child', 'text-decoration', 'line-through');
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
