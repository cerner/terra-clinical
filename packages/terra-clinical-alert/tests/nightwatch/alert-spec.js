/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {

  'Default alert test - Displays a default alert with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/alert-tests/default`)
      .expect.element('#defaultAlert').to.be.present;
    browser.assert.attributeContains(
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
        '#defaultAlert > div[class*="_body"] > div[class*="_section"]  div',
        'Check default Alert content structure')
      .assert.containsText(
        '#defaultAlert > div[class*="_body"] > div[class*="_section"]  div',
        'Default Alert',
        'Check text content provided to default Alert');
  },

  'Type attribute tests - Check Alert of type outside records': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/alert-tests/type`);
    browser.expect.element('#outsideRecordsAlert').to.be.present;

    browser
      .assert.containsText(
        '#outsideRecordsAlert > div[class*="_body"] > div[class*="_section"] > strong[class*="_title"]',
        'Outside Records.',
        'Check default title for Alert of type outside-records')
      .assert.containsText(
        '#outsideRecordsAlert > div[class*="_body"] > div[class*="_section"]  div',
        'Alert of type Outside Records',
        'Check text content provided to Alert of type outside-records');
  },

  'Title attribute tests - Displays an alert of each type with a custom title': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/alert-tests/title`);
    browser.expect.element('#outsideRecordsAlert').to.be.present;

    browser
      .assert.containsText(
        '#outsideRecordsAlert > div[class*="_body"] > div[class*="_section"] > strong[class*="_title"]',
        'Outside_Records_Alert:',
        'Check custom title for Alert of type outside records');
  },

  'Custom Alert Tests - Displays custom alerts with varying permutations of title, custom icon and custom status color parameters': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/alert-tests/custom`);
  },
});
