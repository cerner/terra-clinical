// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays an item comment with default props': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/item-comment-tests/default`)
      .assert.elementPresent('#ItemComment');
  },

  'Displays an item comment with the correct text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/item-comment-tests/text`)
      .assert.containsText('#ItemComment', 'test comment');
  },
});
