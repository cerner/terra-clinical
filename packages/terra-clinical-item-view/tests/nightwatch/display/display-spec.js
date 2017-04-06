/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('../packages/terra-toolkit/').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-item-view', done);
  },

  'Displays text as default': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-view-display-tests/default`);
    browser.expect.element('.terra-ItemView-display').to.be.present;
  },
  'Displays text with different styles': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-view-display-tests/text-style`);
    browser.expect.element('.terra-ItemView-display').to.be.present;

    browser.assert.cssClassPresent('#test-display-secondary .terraClinical-ItemView-text', 'terraClinical-ItemView-text--secondary');
    browser.assert.cssClassPresent('#test-display-attention .terraClinical-ItemView-text', 'terraClinical-ItemView-text--attention');
    browser.assert.cssClassPresent('#test-display-strike-through .terraClinical-ItemView-text', 'terraClinical-ItemView-text--strikeThrough');
  },
  'Displays text with an icon': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-view-display-tests/icon`);
    browser.expect.element('.terraClinical-ItemView-display .terraClinical-ItemView-text--inlineIcon > :first-child').to.be.present;
  },
};
