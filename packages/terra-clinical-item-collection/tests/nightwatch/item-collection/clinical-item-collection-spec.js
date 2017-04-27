/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

const windowSizes = {
  default: [470, 768],
  tiny: [622, 768],
  small: [838, 768],
  medium: [1000, 768],
  large: [1300, 768],
  huge: [1500, 768],
};

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-item-collection', done);
  },

  'Displays the correct collection responsive to window size for tiny breakpoint': (browser) => {
    const width = browser.globals.width;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/tiny-breakpoint`)
      .waitForElementVisible('.terraClinical-ItemCollection', 1000);
    if (width < windowSizes.tiny[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--listView');
    } else if (width >= windowSizes.tiny[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--tableView');
    }
  },
  'Displays the correct collection responsive to window size for small breakpoint': (browser) => {
    const width = browser.globals.width;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/small-breakpoint`)
      .waitForElementVisible('.terraClinical-ItemCollection', 1000);
    if (width < windowSizes.small[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--listView');
    } else if (width >= windowSizes.small[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--tableView');
    }
  },
  'Displays the correct collection responsive to window size for medium breakpoint': (browser) => {
    const width = browser.globals.width;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/medium-breakpoint`)
      .waitForElementVisible('.terraClinical-ItemCollection', 1000);
    if (width < windowSizes.medium[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--listView');
    } else if (width >= windowSizes.medium[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--tableView');
    }
  },
  'Displays the correct collection responsive to window size for large breakpoint': (browser) => {
    const width = browser.globals.width;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/large-breakpoint`)
      .waitForElementVisible('.terraClinical-ItemCollection', 1000);
    if (width < windowSizes.large[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--listView');
    } else if (width >= windowSizes.large[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--tableView');
    }
  },
  'Displays the correct collection responsive to window size for huge breakpoint': (browser) => {
    const width = browser.globals.width;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/item-collection-tests/huge-breakpoint`)
      .waitForElementVisible('.terraClinical-ItemCollection', 1000);
    if (width < windowSizes.huge[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--listView');
    } else if (width >= windowSizes.huge[0]) {
      browser.assert.cssClassPresent('.terraClinical-ItemCollection', 'terraClinical-ItemCollection--tableView');
    }
  },
};
