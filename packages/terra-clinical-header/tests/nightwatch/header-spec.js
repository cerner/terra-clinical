/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-header', done);
  },

  'Displays a default header with no content': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/default`)
    .assert.elementPresent('#Header');
  },
  'Displays a header with a title only': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/title`)
    .assert.containsText('#Header h1', 'Title');
  },
  'Displays a header with a long title that truncates': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/long-title`)
    .assert.containsText('#Header h1', 'LongTitle');
  },
  'Displays a header with content on the left': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/left-content`);
    browser.expect.element('#headerTest--content').to.be.present;
  },
  'Displays a header with content on the right': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/right-content`);
    browser.expect.element('#headerTest--content').to.be.present;
  },
  'Displays a header with content on the left and right': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/left-and-right-content`);
    browser.expect.element('#headerTest--startContent').to.be.present;
    browser.expect.element('#headerTest--endContent').to.be.present;
  },
};
