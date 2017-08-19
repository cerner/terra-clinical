/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays the correct column class name': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-table-header-cell-tests/examples`);
    browser.expect.element('#accessory').to.be.present;
    browser.expect.element('#comment').to.have.attribute('data-terra-clinical-item-collection-column').which.equals('comment');
    browser.expect.element('#display').to.have.attribute('data-terra-clinical-item-collection-column').which.equals('display');
  },
});
