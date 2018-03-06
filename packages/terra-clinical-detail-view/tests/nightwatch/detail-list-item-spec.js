// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a Detail List Item as expected': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-detail-view/detail-list-item/default-list-item`)
      .assert.elementPresent('#DetailListItem')
      .assert.cssProperty('#DetailListItem', 'min-width', '50%');
  },
});
