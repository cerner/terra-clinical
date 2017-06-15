/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-item-collection', done);
  },

  'Displays the correct column class name': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-table-header-cell-tests/examples`);
    browser.expect.element('.terraClinical-ItemCollection-column').to.be.present;
    browser.assert.cssClassPresent('#accessory', 'terraClinical-ItemCollection-column--accessory');
    browser.assert.cssClassPresent('#comment', 'terraClinical-ItemCollection-column--comment');
    browser.assert.cssClassPresent('#display', 'terraClinical-ItemCollection-column--display');
  },
};
