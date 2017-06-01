/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-item-display', done);
  },

  'Displays text as default': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-display-tests/default`);
    browser.expect.element('.terraClinical-ItemDisplay').to.be.present;
  },
  'Displays text with different styles': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-display-tests/text-style`);
    browser.expect.element('.terraClinical-ItemDisplay').to.be.present;

    browser.assert.cssClassPresent('#test-display-secondary .terraClinical-ItemDisplay-text', 'terraClinical-ItemDisplay-text--secondary');
    browser.assert.cssClassPresent('#test-display-attention .terraClinical-ItemDisplay-text', 'terraClinical-ItemDisplay-text--attention');
    browser.assert.cssClassPresent('#test-display-strike-through .terraClinical-ItemDisplay-text', 'terraClinical-ItemDisplay-text--strikeThrough');
  },
  'Displays text with an icon': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-display-tests/icon`);
    browser.expect.element('.terraClinical-ItemDisplay .terraClinical-ItemDisplay-inlineIcon > :first-child').to.be.present;
  },
};
