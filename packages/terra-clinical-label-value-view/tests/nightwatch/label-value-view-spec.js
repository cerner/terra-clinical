// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terraClinical-label-value-view', done);
  },

  'Displays a default LabelValueView when no value input is provided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/label-value-view-tests/default`)
      .assert.elementPresent('#LabelValueView');
  },

  'Displays a LabelValueView when a text input is provided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/label-value-view-tests/text-value`)
      .assert.elementPresent('#LabelValueView');
  },

  'Displays a LabelValueView when a node input is provided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/label-value-view-tests/element-value`)
      .assert.elementPresent('#child');
  },

  'Displays a LabelValueView when text and node input is provided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/label-value-view-tests/multiple-values`)
      .assert.elementPresent('#child');
  },
};
