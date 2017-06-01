/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
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
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/detail-list-tests/noraml-item-size`);
    browser.expect.element('.terraClinical-DetailList').to.be.present;
    browser.expect.element('.terraClinical-DetailList-title').to.be.present;
    browser.expect.element('.terraClinical-DetailList-list').to.be.present;
    browser.assert.cssProperty('.terraClinical-DetailList-list', 'display', '-webkit-flex');
  },

};
