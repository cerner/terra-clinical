/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

const breakpoints = {
  tiny: 544,
  small: 768,
  medium: 992,
  large: 1216,
  huge: 1440,
};

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-item-collection', done);
  },

  'Displays a default item collection': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/default`)
      .assert.elementPresent('#ItemCollection');
  },

  'Displays the correct collection responsive to window size for tiny breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/tiny-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    if (width < breakpoints.tiny) {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection list-view');
    } else {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection table-view');
    }
  },

  'Displays the correct collection responsive to window size for small breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/small-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    if (width < breakpoints.small) {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection list-view');
    } else {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection table-view');
    }
  },

  'Displays the correct collection responsive to window size for medium breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/medium-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    if (width < breakpoints.medium) {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection list-view');
    } else {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection table-view');
    }
  },

  'Displays the correct collection responsive to window size for large breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/large-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    if (width < breakpoints.large) {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection list-view');
    } else {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection table-view');
    }
  },

  'Displays the correct collection responsive to window size for huge breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/huge-breakpoint`);
    browser.execute("document.getElementById('siteApplication').style.padding = 0;");

    if (width < breakpoints.huge) {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection list-view');
    } else {
      browser.assert.attributeEquals('#ItemCollection', 'data-class', 'item-collection table-view');
    }
  },

  'Displays an item collection with table styles': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/table-styles`)
      .assert.elementPresent('#TableStyles');
  },

  'Displays an item collection with list styles': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/list-styles`)
      .assert.elementPresent('#ListStyles');
  },

  'Displays an item collection with styles applied to list items': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/item-styles`)
      .assert.elementPresent('#ItemStyles');
  },

  'Triggers onChange function when list or row is selected upon selection': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/onchange`);
    if (width < breakpoints.small) {
      browser.click('ul > li:nth-child(1)');
      browser.assert.containsText('#selected-index', '0');

      browser.sendKeys('ul > li:nth-child(2)', browser.Keys.ENTER);
      browser.assert.containsText('#selected-index', '1');
    } else {
      browser.click('tbody > tr:nth-child(1)');
      browser.assert.containsText('#selected-index', '0');

      browser.sendKeys('tbody > tr:nth-child(2)', browser.Keys.ENTER);
      browser.assert.containsText('#selected-index', '1');
    }
  },

  'Maintains selection in list and table view as screen is resized': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/onchange`);
    browser.execute("document.getElementById('root').style.padding = 0;");

    if (width < breakpoints.small) {
      browser.assert.containsText('#selected-index', '2');
    } else {
      browser.assert.containsText('#selected-index', '2');
    }
  },
};
