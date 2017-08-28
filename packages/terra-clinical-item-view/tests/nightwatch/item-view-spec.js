// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a clinical item view with default props': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/default`);
    browser.assert.elementPresent('#ItemView');
  },

  'Displays a clinical item view with displays present': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/displays`);
    browser.assert.elementPresent('#test-displays');
    browser.assert.elementPresent('#test-displays-two');
    browser.assert.elementPresent('#test-displays-two-start');
  },

  'Displays a clinical item view with a start accessory': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/accessory`);
    browser.assert.elementPresent('#test-start-accessory #StartAccessory');
    browser.assert.elementNotPresent('#test-start-accessory #EndAccessory');
  },

  'Displays a clinical item view with an end accessory': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/accessory`);
    browser.assert.elementNotPresent('#test-end-accessory #StartAccessory');
    browser.assert.elementPresent('#test-end-accessory #EndAccessory');
  },

  'Displays a clinical item view with a start and end accessory': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/accessory`);
    browser.assert.elementPresent('#test-both-accessory-top #StartAccessory');
    browser.assert.elementPresent('#test-both-accessory-top #EndAccessory');
  },

  'Displays a clinical item view with a comment set': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/comment`);
    browser.assert.elementPresent('#ItemView1 #ItemComment');
  },

  'Displays a clinical item view with the word wrap and truncation': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-view-tests/overflow`);
    browser.assert.elementPresent('#ItemView-one-wrap');
    browser.assert.elementPresent('#ItemView-two-wrap');
    browser.assert.elementPresent('#ItemView-one-truncate');
    browser.assert.elementPresent('#ItemView-two-truncate');
  },
});
