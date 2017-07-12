/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-detail-view', done);
  },

  'Displays a Detail List Item as expected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/detail-list-item-tests/default`)
      .assert.elementPresent('#DetailListItem')
      .assert.cssProperty('#DetailListItem', 'min-width', '50%');
  },
};
