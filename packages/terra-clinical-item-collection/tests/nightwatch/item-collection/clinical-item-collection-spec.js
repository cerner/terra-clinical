/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default item collection': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/default`)
      .expect.element('#ItemCollection').to.be.present;
  },

  'Displays the correct collection responsive to window size for tiny breakpoint': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/tiny-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-list-view');
    } else {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-table-view');
    }
  },

  'Displays the correct collection responsive to window size for small breakpoint': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/small-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.small[0]) {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-list-view');
    } else {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-table-view');
    }
  },

  'Displays the correct collection responsive to window size for medium breakpoint': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/medium-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.medium[0]) {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-list-view');
    } else {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-table-view');
    }
  },

  'Displays the correct collection responsive to window size for large breakpoint': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/large-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.large[0]) {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-list-view');
    } else {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-table-view');
    }
  },

  'Displays the correct collection responsive to window size for huge breakpoint': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/huge-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.huge[0]) {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-list-view');
    } else {
      browser.expect.element('#ItemCollection').to.have.attribute('data-terra-clinical-item-collection-table-view');
    }
  },

  'Displays an item collection with table styles': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/item-collection-tests/table-styles`)
      .expect.element('#TableStyles').to.be.present;
  },

  'Displays an item collection with list styles': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/item-collection-tests/list-styles`)
      .expect.element('#ListStyles').to.be.present;
  },

  'Displays an item collection with styles applied to list items': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/item-collection-tests/item-styles`)
      .expect.element('#ItemStyles').to.be.present;
  },

  'Triggers onChange function when list or row is selected upon selection': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/onchange`)
      .expect.element('#ItemCollection').to.be.present;

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.small[0]) {
      browser.click('ul > li:nth-child(1)');
      browser.expect.element('#selected-index').text.to.contain('0');

      browser.sendKeys('ul > li:nth-child(2)', browser.Keys.ENTER);
      browser.expect.element('#selected-index').text.to.contain('1');
    } else {
      browser.click('tbody > tr:nth-child(1)');
      browser.expect.element('#selected-index').text.to.contain('0');

      browser.sendKeys('tbody > tr:nth-child(2)', browser.Keys.ENTER);
      browser.expect.element('#selected-index').text.to.contain('1');
    }
  },

  'Maintains selection in list and table view as screen is resized': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/onchange`);
    browser.execute("document.getElementById('root').style.padding = 0;");
    browser.expect.element('#selected-index').text.to.contain('2');
  },

  'Correctly displays a row missing a start accessory when the first row has all elements': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/varying-items`);
    browser.execute("document.getElementById('root').style.padding = 0;");

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.small[0]) {
      browser.expect.element('li[class*="list-item"]:nth-child(2) > div > div[class*="accessory"]:nth-child(1)').to.be.present;
    } else {
      browser.expect.element('tr[class*="row"]:nth-child(2) > td[class*="content-accessory"]:nth-child(1)').to.be.present;
    }
  },

  'Correctly displays a row missing a end accessory when the first row has all elements': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/varying-items`);
    browser.execute("document.getElementById('root').style.padding = 0;");

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.small[0]) {
      browser.expect.element('li[class*="list-item"]:nth-child(3) > div > div[class*="accessory"]:nth-child(3)').to.be.present;
    } else {
      browser.expect.element('tr[class*="row"]:nth-child(3) > td[class*="content-accessory"]:nth-child(6)').to.be.present;
    }
  },

  'Correctly displays a row missing a comment when the first row has all elements': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/varying-items`);
    browser.execute("document.getElementById('root').style.padding = 0;");

    const width = screenWidth(browser);
    if (width > browser.globals.breakpoints.small[0]) {
      browser.expect.element('tr[class*="row"]:nth-child(4) > td[data-terra-clinical-item-collection-content*="comment"]:nth-child(5)').to.be.present;
    }
  },

  'Correctly displays a row missing displays when the first row has all elements': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/varying-items`);
    browser.execute("document.getElementById('root').style.padding = 0;");

    const width = screenWidth(browser);
    if (width > browser.globals.breakpoints.small[0]) {
      browser.expect.element('tr[class*="row"]:nth-child(5) > td[data-terra-clinical-item-collection-content*="display"]:nth-child(3)').to.be.present;
      browser.expect.element('tr[class*="row"]:nth-child(5) > td[data-terra-clinical-item-collection-content*="display"]:nth-child(4)').to.be.present;
    }
  },

  'Correctly displays a row with too many displays when the first row has all elements': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/varying-items`);
    browser.execute("document.getElementById('root').style.padding = 0;");

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.small[0]) {
      browser.expect.element('li[class*="list-item"]:nth-child(6) > div > div:nth-child(1) > div[class*="row"]:nth-child(5)').to.not.be.present;
      browser.expect.element('li[class*="list-item"]:nth-child(6) > div > div:nth-child(1) > div[class*="row"]:nth-child(6)').to.not.be.present;
    } else {
      browser.expect.element('tr[class*="row"]:nth-child(6) > td[data-terra-clinical-item-collection-content*="display"]:nth-child(5)').to.not.be.present;
      browser.expect.element('tr[class*="row"]:nth-child(6) > td[data-terra-clinical-item-collection-content*="display"]:nth-child(6)').to.not.be.present;
    }
  },

  'Correctly displays a row missing many elements when the first row has all elements': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/item-collection-tests/varying-items`);
    browser.execute("document.getElementById('root').style.padding = 0;");

    const width = screenWidth(browser);
    if (width > browser.globals.breakpoints.small[0]) {
      browser.expect.element('tr[class*="row"]:nth-child(7) > td[data-terra-clinical-item-collection-content*="display"]:nth-child(4)').to.be.present;
      browser.expect.element('tr[class*="row"]:nth-child(7) > td[data-terra-clinical-item-collection-content*="comment"]:nth-child(5)').to.be.present;
      browser.expect.element('tr[class*="row"]:nth-child(7) > td[class*="content-accessory"]:nth-child(6)').to.be.present;
    }
  },
});
