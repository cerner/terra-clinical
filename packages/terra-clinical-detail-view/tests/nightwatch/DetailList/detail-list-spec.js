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

  'Displays a default Detail List with a title and list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/detail-list-tests/noraml-item-size`)
      .assert.elementPresent('#DetailList')
      .assert.containsText('#DetailList div:nth-child(1)', 'Detail List Title')
      .assert.cssProperty('#DetailList div:nth-child(2)', 'display', '-webkit-flex');
  },

};
