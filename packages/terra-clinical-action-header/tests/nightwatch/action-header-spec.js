/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

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
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header`);
  },
  'Displays an action header with title': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-title`);
  },
  'Displays an action header with back button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-back`);
  },
  'Displays an action header with close button': (browser) => {
    const width = browser.globals.width;
    if (width < windowSizes.small[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-close`)
        .waitForElementVisible('.terraClinical-ActionHeader-leftButtons > :first-child', 1000)
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child').to.be.present;
    } else {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-close`)
        .waitForElementVisible('.terraClinical-ActionHeader-rightButtons > :first-child', 1000)
        .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child').to.be.present;
    }
  },
  'Displays an action header with expand button': (browser) => {
    const width = browser.globals.width;
    if (width < windowSizes.small[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-maximize`)
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child').to.not.be.present;
    } else {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-maximize`)
        .waitForElementVisible('.terraClinical-ActionHeader-leftButtons > :first-child', 1000)
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child').to.be.present;
    }
  },
  'Displays an action header with minimize button': (browser) => {
    const width = browser.globals.width;
    if (width < windowSizes.small[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-minimize`)
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child').to.not.be.present;
    } else {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-minimize`)
        .waitForElementVisible('.terraClinical-ActionHeader-leftButtons > :first-child', 1000)
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child').to.be.present;
    }
  },
  'Displays an action header with a back button and a close button': (browser) => {
    browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-back-close`)
        .waitForElementVisible('.terraClinical-ActionHeader-leftButtons > :first-child', 1000)
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child').to.be.present;
    browser
        .waitForElementVisible('.terraClinical-ActionHeader-rightButtons > :first-child', 1000)
        .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child').to.be.present;
  },
  'Displays an action header with a previous-next button-group': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-previous-next`);
  },
  'Displays an action header with custom content': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-child`);
  },
};
