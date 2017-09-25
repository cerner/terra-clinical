/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default header with no content': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/header-tests/default`)
    .assert.elementPresent('#Header');
  },

  'Displays a header with a title only': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/header-tests/title`)
    .assert.containsText('#Header h1', 'Title');
  },

  'Displays a header with a long title that truncates': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/header-tests/long-title`)
    .assert.containsText('#Header h1', 'LongTitle');
  },

  'Displays a header with content on the left': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/header-tests/left-content`);
    browser.expect.element('#headerTest--content').to.be.present;
  },

  'Displays a header with content on the right': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/header-tests/right-content`);
    browser.expect.element('#headerTest--content').to.be.present;
  },

  'Displays a header with content on the left and right': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/header-tests/left-and-right-content`);
    browser.expect.element('#headerTest--startContent').to.be.present;
    browser.expect.element('#headerTest--endContent').to.be.present;
  },

  'Displays a header with a long title that truncates with left and right content': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/header-tests/long-title-content`)
    .assert.containsText('#Header h1', 'LongTitle');
  },

  'Displays a subsection header with content on the left and right': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/header-tests/left-and-right-content-subheader`)
    .assert.elementPresent('header[class*="flex-subheader"]');
    browser.expect.element('#headerTest--startContent').to.be.present;
    browser.expect.element('#headerTest--endContent').to.be.present;
  },

  'Displays a header with no title and content on the right': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/header-tests/no-title-right-content`);
    browser.expect.element('#headerTest--content').to.be.present;
  },
});
