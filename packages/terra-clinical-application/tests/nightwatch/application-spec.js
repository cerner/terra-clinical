// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-application', done);
  },

  'Renders the Application with provided AppDelegate': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/application-tests/default`)
      .assert.elementPresent('#Application')
      .assert.containsText('.test-ContainerComponent', 'App is present');
  },

  'Renders the Application without provided AppDelegate': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/application-tests/no-app-delegate`)
      .assert.elementPresent('#Application')
      .assert.containsText('.test-ContainerComponent', 'App is not present');
  },
};
