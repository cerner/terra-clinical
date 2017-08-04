  /* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-item-collection', done);
  },

  'Displays the correct column class name': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-table-header-cell-tests/examples`);
    browser.expect.element('#accessory').to.be.present;
    browser.expect.element('#comment').to.have.attribute('data-terra-clinical-item-collection-column').which.equals('comment');
    browser.expect.element('#display').to.have.attribute('data-terra-clinical-item-collection-column').which.equals('display');
  },
};
