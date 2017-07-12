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

  'Displays a divided Detail View with provided components': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/detail-view-tests/detail-view-divided`)
      .assert.elementPresent('#DetailView hr');
  },
  'Displays a Detail View that is not divided with provided components': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/detail-view-tests/detail-view-no-divider`)
      .assert.elementNotPresent('#DetailView hr');
  },
};
