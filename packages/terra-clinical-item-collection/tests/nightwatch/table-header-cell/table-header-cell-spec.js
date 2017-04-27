/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-item-collection', done);
  },

  'Displays text as default': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-table-header-cell-tests/examples`);
    browser.expect.element('.terraClinical-ItemCollection-column-width').to.be.present;
    browser.assert.cssClassPresent('#tiny', 'terraClinical-ItemCollection-column-width-tiny');
    browser.assert.cssClassPresent('#small', 'terraClinical-ItemCollection-column-width-small');
    browser.assert.cssClassPresent('#medium', 'terraClinical-ItemCollection-column-width-medium');
    browser.assert.cssClassPresent('#large', 'terraClinical-ItemCollection-column-width-large');
    browser.assert.cssClassPresent('#huge', 'terraClinical-ItemCollection-column-width-huge');
  },
};
