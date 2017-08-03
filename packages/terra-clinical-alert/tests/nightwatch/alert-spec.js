/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-alert', done);
  },

  'Default alert test - Displays a default alert with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/default`)
      .waitForElementVisible('#defaultAlert', 1000)
      .assert.elementPresent(
        '#defaultAlert',
        'Check the default Alert exists')
      .assert.attributeContains(
        '#defaultAlert',
        'class',
        '_alert',
        'Check that the default Alert is of type alert')
      .assert.elementPresent(
        '#defaultAlert > div[class*="_body"] > div[class*="_icon"] > svg',
        'Check that the default Alert has an icon')
      .assert.elementPresent(
        '#defaultAlert > div[class*="_body"] > div[class*="_section"] > strong[class*="_title"]',
        'Check default Alert title structure')
      .assert.containsText(
        '#defaultAlert > div[class*="_body"] > div[class*="_section"] > strong[class*="_title"]',
        'Alert.',
        'Check default Alert has default title for Alert of type alert')
      .assert.elementPresent(
        '#defaultAlert > div[class*="_body"] > div[class*="_section"]  div[class*="_content"]',
        'Check default Alert content structure')
      .assert.containsText(
        '#defaultAlert > div[class*="_body"] > div[class*="_section"]  div[class*="_content"]',
        'Default Alert',
        'Check text content provided to default Alert');
  },

  'Type attribute tests - Displays a basic alert of each type with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/type`);
  },

  'Type attribute tests - Check Alert of type gap checking': (browser) => {
    browser
      .assert.elementPresent(
        '#gapCheckingAlert',
        'Check that Alert of type gap-checking exists')
      .assert.containsText(
        '#gapCheckingAlert > div[class*="_body"] > div[class*="_section"] > strong[class*="_title"]',
        'Required Action.',
        'Check default title for Alert of type gap-checking')
      .assert.containsText(
        '#gapCheckingAlert > div[class*="_body"] > div[class*="_section"]  div[class*="_content"]',
        'Alert of type Gap Checking',
        'Check text content provided to Alert of type gap-checking');
  },

  'Type attribute tests - Check Alert of type outside records': (browser) => {
    browser
      .assert.elementPresent(
        '#outsideRecordsAlert',
        'Check that Alert of type outside-records exists')
      .assert.containsText(
        '#outsideRecordsAlert > div[class*="_body"] > div[class*="_section"] > strong[class*="_title"]',
        'Outside Records.',
        'Check default title for Alert of type outside-records')
      .assert.containsText(
        '#outsideRecordsAlert > div[class*="_body"] > div[class*="_section"]  div[class*="_content"]',
        'Alert of type Outside Records',
        'Check text content provided to Alert of type outside-records');
  },

  'Title attribute tests - Displays an alert of each type with a custom title': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/title`)
      .assert.containsText(
        '#gapCheckingAlert > div[class*="_body"] > div[class*="_section"] > strong[class*="_title"]',
        'Gap_Checking_Alert:',
        'Check custom title for Alert of type gap checking')
      .assert.containsText(
        '#outsideRecordsAlert > div[class*="_body"] > div[class*="_section"] > strong[class*="_title"]',
        'Outside_Records_Alert:',
        'Check custom title for Alert of type outside records');
  },

  'Custom Alert Tests - Displays custom alerts with varying permutations of title, custom icon and custom status color parameters': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/custom`);
  },
};
