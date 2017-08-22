// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a clinical item view with default props': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/item-comment-tests/default`)
      .assert.elementPresent('#ItemComment');
  },

  'Displays a clinical item view with displays present': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/item-comment-tests/text`)
      .assert.containsText('#ItemComment', 'test comment');
  },
});
