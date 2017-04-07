/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-item-view', done);
  },

  'Displays a clinical item view with default props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-view-comment-tests/default`);
    browser.expect.element('.terraClinical-ItemView-comment').to.be.present;
  },
  'Displays a clinical item view with displays present': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-view-comment-tests/text`)
      .assert.containsText('.terraClinical-ItemView-comment', 'test comment');
  },
};
