/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
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
    screenshot(browser, 'terra-clinical-action-header', done);
  },

  'Displays a default action header': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header`)
      .assert.elementPresent('#ActionHeader');
  },
  'Displays an action header with title': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-title`)
      .assert.elementPresent('#ActionHeader');
  },
  'Displays an action header with back button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-back`)
      .assert.elementPresent('[class*="left-buttons"] > button')
      .assert.attributeContains('[class*="left-buttons"] > button', 'aria-label', 'Back');
  },
  'Displays an action header with close button': (browser) => {
    const width = browser.globals.width;
    if (width < windowSizes.small[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-close`)
        .assert.elementPresent('[class*="left-buttons"] > button')
        .assert.attributeContains('[class*="left-buttons"] > button', 'aria-label', 'Back');
    } else {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-close`)
        .assert.elementPresent('[class*="right-buttons"] > button')
        .assert.attributeContains('[class*="right-buttons"] > button', 'aria-label', 'Close');
    }
  },
  'Displays an action header with maximize button': (browser) => {
    const width = browser.globals.width;
    if (width < windowSizes.small[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-maximize`)
        .assert.elementNotPresent('[class*="left-buttons"] > button');
    } else {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-maximize`)
        .assert.elementPresent('button')
        .assert.attributeContains('[class*="left-buttons"] > button', 'aria-label', 'Maximize');
    }
  },
  'Displays an action header with minimize button': (browser) => {
    const width = browser.globals.width;
    if (width < windowSizes.small[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-minimize`)
        .assert.elementNotPresent('[class*="left-buttons"] > button');
    } else {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-minimize`)
        .assert.elementPresent('[class*="left-buttons"] > button')
        .assert.attributeContains('[class*="left-buttons"] > button', 'aria-label', 'Minimize');
    }
  },
  'Displays an action header with a back button and a close button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-back-close`);
    browser
      .assert.elementPresent('#ActionHeader [class*="left-buttons"] > button')
      .assert.attributeContains('#ActionHeader [class*="left-buttons"] > button', 'aria-label', 'Back');
    browser
      .assert.elementPresent('#ActionHeader [class*="right-buttons"] > button')
      .assert.attributeContains('#ActionHeader [class*="right-buttons"] > button', 'aria-label', 'Close');
  },
  'Displays an action header with a previous-next button-group': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-previous-next`);
    browser
      .assert.elementPresent('[class*="left-buttons"] button:first-child')
      .assert.attributeContains('[class*="left-buttons"] button:first-child', 'aria-label', 'Previous');
    browser
      .assert.elementPresent('[class*="left-buttons"] button:last-child')
      .assert.attributeContains('[class*="left-buttons"] button:last-child', 'aria-label', 'Next');
  },
  'Displays an action header with custom content': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-child`)
      .assert.elementPresent('#CustomContent');
  },
};
