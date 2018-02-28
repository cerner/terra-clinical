/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a item collection with all possibe elements': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-all-elements`)
      .expect.element('#ItemCollection').to.be.present;
  },

  'Displays the correct collection when responding to breakpoint': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-all-elements`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.small[0]) {
      browser.expect.element('#ItemCollection ul').to.have.attribute('data-terra-clinical-item-collection-list-view');
    } else {
      browser.expect.element('#ItemCollection table').to.have.attribute('data-terra-clinical-item-collection-table-view');
    }
  },

  'Displays a selectable item collection': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-selectable`)
      .expect.element('#ItemCollection').to.be.present;
  },

  'Returns child key for click when onSelect is given to a selectable item collection': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-selectable`);
    browser.expect.element('#item1').to.be.present;
    browser.click('#item1');
    browser.expect.element('#selected-key').text.to.contain('1');
  },

  'Returns child key for ENTER when onSelect is given to a selectable item collection': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-selectable`);
    browser.expect.element('#item3').to.be.present;
    browser.sendKeys('#item2', browser.Keys.ENTER);
    browser.expect.element('#selected-key').text.to.contain('2');
  },

  'Returns child key for SPACE when onSelect is given to a selectable item collection': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-selectable`);
    browser.expect.element('#item3').to.be.present;
    browser.sendKeys('#item3', browser.Keys.ENTER);
    browser.expect.element('#selected-key').text.to.contain('3');
  },

  // Screenshot Tests
  'Displays an item collection with table styles': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-table-styles`)
      .expect.element('#TableStyles').to.be.present;
  },

  'Displays an item collection with list styles': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-list-styles`)
      .expect.element('#ListStyles').to.be.present;
  },

  'Displays an item collection with styles applied to list items': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-item-styles`)
      .expect.element('#ItemStyles').to.be.present;
  },

  'Displays an item collection with items with varying content': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-item-collection/item-collection/item-collection-varying-items`)
      .expect.element('#VaryingItems').to.be.present;
  },

});
