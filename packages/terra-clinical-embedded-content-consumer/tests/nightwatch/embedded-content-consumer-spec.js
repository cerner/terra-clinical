/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-embedded-content-consumer', done);
  },

  'Displays a provider embedded in the consumer that contains title text.': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/embedded-content-consumer-tests/basic-consumer`)
    .assert.elementPresent('iframe');
  },

  'Displays a provider embedded in the consumer that triggers after initialization is complete.': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/embedded-content-consumer-tests/on-ready-consumer`)
      .assert.elementPresent('iframe');
  },

  'Displays a provider embedded in the consumer that triggers a custom event.': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/embedded-content-consumer-tests/custom-event-consumer`)
    .assert.elementPresent('iframe');
  },

};
