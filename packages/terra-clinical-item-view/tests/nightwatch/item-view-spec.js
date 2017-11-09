/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a clinical item view with default props': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/default`);
    browser.expect.element('#ItemView').to.be.present;
  },

  'Displays a clinical item view with displays present': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/displays`);
    browser.expect.element('#test-displays').to.be.present;
    browser.expect.element('#test-displays-two').to.be.present;
    browser.expect.element('#test-displays-two-start').to.be.present;
  },

  'Displays a clinical item view with a start accessory': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/accessory`);
    browser.expect.element('#test-start-accessory #StartAccessory').to.be.present;
    browser.expect.element('#test-start-accessory #EndAccessory').to.not.be.present;
  },

  'Displays a clinical item view with start accessory alignment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/accessory`);
    browser.expect.element('#test-align-start-accessory div[class*="accessory"]').to.be.present;
  },

  'Displays a clinical item view with an end accessory': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/accessory`);
    browser.expect.element('#test-end-accessory #StartAccessory').to.not.be.present;
    browser.expect.element('#test-end-accessory #EndAccessory').to.be.present;
  },

  'Displays a clinical item view with end accessory alignment': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/accessory`);
    browser.expect.element('#test-align-end-accessory div[class*="accessory"]').to.be.present;
  },

  'Displays a clinical item view with a start and end accessory': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/accessory`);
    browser.expect.element('#test-both-accessory-top #StartAccessory').to.be.present;
    browser.expect.element('#test-both-accessory-top #EndAccessory').to.be.present;
  },

  'Displays a clinical item view with a comment set': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/comment`);
    browser.expect.element('#ItemView1 #ItemComment').to.be.present;
  },

  'Displays a clinical item view with the word wrap and truncation': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/overflow`);
    browser.expect.element('#ItemView-one-wrap').to.be.present;
    browser.expect.element('#ItemView-two-wrap').to.be.present;
    browser.expect.element('#ItemView-one-truncate').to.be.present;
    browser.expect.element('#ItemView-two-truncate').to.be.present;
  },
});
