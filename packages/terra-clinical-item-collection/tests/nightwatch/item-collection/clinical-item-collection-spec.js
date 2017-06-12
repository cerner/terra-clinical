/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

// widths are breakpoint width + 40 to account for padding on the root div
const windowWidths = {
  tiny: 584,
  small: 808,
  medium: 1032,
  large: 1256,
  huge: 1480,
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
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/default`);
  },

  'Displays the correct collection responsive to window size for tiny breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/tiny-breakpoint`);
    if (width < windowWidths.tiny) {
      browser.expect.element('.terraClinical-ItemCollection--listView').to.be.present;
    } else {
      browser.expect.element('.terraClinical-ItemCollection--tableView').to.be.present;
    }
  },

  'Displays the correct collection responsive to window size for small breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/small-breakpoint`);
    if (width < windowWidths.small) {
      browser.expect.element('.terraClinical-ItemCollection--listView').to.be.present;
    } else {
      browser.expect.element('.terraClinical-ItemCollection--tableView').to.be.present;
    }
  },

  'Displays the correct collection responsive to window size for medium breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/medium-breakpoint`);
    if (width < windowWidths.medium) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--listView');
      browser.expect.element('.terraClinical-ItemCollection--listView').to.be.present;
    } else {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--tableView');
      browser.expect.element('.terraClinical-ItemCollection--tableView').to.be.present;
    }
  },

  'Displays the correct collection responsive to window size for large breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/large-breakpoint`);
    if (width < windowWidths.large) {
      browser.expect.element('.terraClinical-ItemCollection--listView').to.be.present;
    } else {
      browser.expect.element('.terraClinical-ItemCollection--tableView').to.be.present;
    }
  },

  'Displays the correct collection responsive to window size for huge breakpoint': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/huge-breakpoint`);
    if (width < windowWidths.huge) {
      browser.expect.element('.terraClinical-ItemCollection--listView').to.be.present;
    } else {
      browser.expect.element('.terraClinical-ItemCollection--tableView').to.be.present;
    }
  },

  'Displays an item collection with table styles': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/table-styles`);
  },

  'Displays an item collection with list styles': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/list-styles`);
  },

  'Displays an item collection with styles applied to list items': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/item-styles`);
  },

  'Triggers onChange function when list or row is selected upon selection': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/onchange`);
    if (width < windowWidths.small) {
      browser.click('.terra-List .terra-ListItem:nth-child(1)');
      browser.assert.containsText('#selected-index', '0');

      browser.sendKeys('.terra-List .terra-ListItem:nth-child(2)', browser.Keys.ENTER);
      browser.assert.containsText('#selected-index', '1');
    } else {
      browser.click('.terra-Table-row:nth-child(1)');
      browser.assert.containsText('#selected-index', '0');

      browser.sendKeys('.terra-Table-row:nth-child(2)', browser.Keys.ENTER);
      browser.assert.containsText('#selected-index', '1');
    }
  },

  'Maintains selection in list and table view as screen is resized': (browser) => {
    const width = browser.globals.width;
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/onchange`);
    if (width < windowWidths.small) {
      browser.assert.containsText('#selected-index', '2');
    } else {
      browser.assert.containsText('#selected-index', '2');
    }
  },
};
