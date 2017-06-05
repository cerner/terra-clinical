// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-error-view', done);
  },

  'Displays a default error view': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/error-view-tests/default`)
      .assert.elementPresent('.terraClinical-ErrorView');
  },
  'Displays an error view with text for name and description': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/error-view-tests/text`)
      .assert.containsText('.terraClinical-ErrorView .terraClinical-ErrorView-text', 'test description')
      .assert.containsText('.terraClinical-ErrorView .terraClinical-ErrorView-text .terraClinical-ErrorView-name', 'test name')
      .assert.elementPresent('.terraClinical-ErrorView');
  },
  'Displays an error with a button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/error-view-tests/button`)
      .assert.elementPresent('.terra-Button')
      .assert.containsText('.terra-Button', 'test button');
  },
  'Displays an error view with glyph hidden': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/error-view-tests/hidden`)
      .assert.elementNotPresent('.terraClinical-ErrorView-glyph');
  },
};
