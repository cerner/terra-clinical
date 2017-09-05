// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default Detail List with a title and list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/detail-list-tests/noraml-item-size`)
      .assert.elementPresent('#DetailList')
      .assert.containsText('#DetailList div:nth-child(1)', 'Detail List Title')
      .assert.cssProperty('#DetailList div:nth-child(2)', 'display', 'flex');
  },
});
