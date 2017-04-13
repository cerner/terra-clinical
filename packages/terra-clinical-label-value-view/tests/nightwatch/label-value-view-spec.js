/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

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
      .assert.elementPresent('.terraClinical-LabelValueView')
      .assert.elementPresent('.terraClinical-LabelValueView-label')
      .assert.elementPresent('.terraClinical-LabelValueView-value')
      .assert.containsText('.terraClinical-LabelValueView-label', 'Label')
      .assert.containsText('.terraClinical-LabelValueView-value', '--');
  },

  'Displays a LabelValueView when a text input is provided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/label-value-view-tests/text-value`)
      .assert.elementPresent('.terraClinical-LabelValueView-value')
      .assert.containsText('.terraClinical-LabelValueView-value', 'Sample Text');
  },

  'Displays a LabelValueView when a elment input is provided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/label-value-view-tests/element-value`)
      .assert.elementNotPresent('.terraClinical-LabelValueView-value');
  },

  'Displays a LabelValueView when text and elment input is provided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/label-value-view-tests/multiple-values`)
      .assert.elementPresent('.terraClinical-LabelValueView-value')
      .assert.elementPresent('#child');
  },
};
