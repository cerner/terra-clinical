/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-header', done);
  },

  'Displays a default header with no content': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/default`);
    browser.expect.element('.terraClinical-Header').to.be.present;
  },
  'Displays a header with a title only': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/title`);
    browser.expect.element('.terraClinical-Header-title').text.to.equal('Title');
  },
  'Displays a header with a long title that truncates': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/long-title`);
    browser.expect.element('.terraClinical-Header-title').text.to.contain('LongTitle');
  },
  'Displays a header with content on the left': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/left-content`);
    browser.expect.element('.terraClinical-HeaderTest--content').to.be.present;
  },
  'Displays a header with content on the right': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/right-content`);
    browser.expect.element('.terraClinical-HeaderTest--content').to.be.present;
  },
  'Displays a header with content on the left and right': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/header-tests/left-and-right-content`);
    browser.expect.element('.terraClinical-HeaderTest--startContent').to.be.present;
    browser.expect.element('.terraClinical-HeaderTest--endContent').to.be.present;
  },
};
