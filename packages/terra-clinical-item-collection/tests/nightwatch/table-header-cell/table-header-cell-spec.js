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
    browser.assert.elementPresent('#accessory');
    browser.assert.attributeEquals('#comment', 'data-class', 'column-comment');
    browser.assert.attributeEquals('#display', 'data-class', 'column-display');
  },
};
