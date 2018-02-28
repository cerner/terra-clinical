// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default action header': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/default-action-header`)
      .assert.elementPresent('#ActionHeader');
  },

  'Displays an action header with title': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/title-action-header`)
      .assert.elementPresent('#ActionHeader');
  },

  'Displays an action header with back button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/back-action-header`)
      .assert.elementPresent('[class*="left-buttons"] > button')
      .assert.attributeContains('[class*="left-buttons"] > button', 'aria-label', 'Back');
  },

  'Displays an action header with close button': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/close-action-header`);
    const width = screenWidth(browser);
    if (width < browser.globals.breakpoints.medium[0]) {
      browser
      .assert.elementPresent('[class*="left-buttons"] > button')
      .assert.attributeContains('[class*="left-buttons"] > button', 'aria-label', 'Back');
    } else {
      browser
      .assert.elementPresent('[class*="right-buttons"] > button')
      .assert.attributeContains('[class*="right-buttons"] > button', 'aria-label', 'Close');
    }
  },

  'Displays an action header with close button even in small view ports': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/keep-close-button-action-header`);
    const width = screenWidth(browser);
    if (width < browser.globals.breakpoints.medium[0]) {
      browser
        .assert.elementPresent('[class*="right-buttons"] > button')
        .assert.attributeContains('[class*="right-buttons"] > button', 'aria-label', 'Close');
    } else {
      browser
        .assert.elementPresent('[class*="right-buttons"] > button')
        .assert.attributeContains('[class*="right-buttons"] > button', 'aria-label', 'Close');
    }
  },

  'Displays an action header with maximize button': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/maximize-action-header`);
    const width = screenWidth(browser);
    if (width < browser.globals.breakpoints.medium[0]) {
      browser.assert.elementNotPresent('[class*="left-buttons"] > button');
    } else {
      browser
      .assert.elementPresent('button')
      .assert.attributeContains('[class*="left-buttons"] > button', 'aria-label', 'Maximize');
    }
  },

  'Displays an action header with minimize button': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/minimize-action-header`);
    const width = screenWidth(browser);
    if (width < browser.globals.breakpoints.medium[0]) {
      browser.assert.elementNotPresent('[class*="left-buttons"] > button');
    } else {
      browser
      .assert.elementPresent('[class*="left-buttons"] > button')
      .assert.attributeContains('[class*="left-buttons"] > button', 'aria-label', 'Minimize');
    }
  },

  'Displays an action header with a back button and a close button': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/back-close-action-header`);
    browser
      .assert.elementPresent('#ActionHeader [class*="left-buttons"] > button')
      .assert.attributeContains('#ActionHeader [class*="left-buttons"] > button', 'aria-label', 'Back');
    browser
      .assert.elementPresent('#ActionHeader [class*="right-buttons"] > button')
      .assert.attributeContains('#ActionHeader [class*="right-buttons"] > button', 'aria-label', 'Close');
  },

  'Displays an action header with a previous-next button-group': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/previous-next-action-header`);
    browser
      .assert.elementPresent('[class*="left-buttons"] button:first-child')
      .assert.attributeContains('[class*="left-buttons"] button:first-child', 'aria-label', 'Previous');
    browser
      .assert.elementPresent('[class*="left-buttons"] button:last-child')
      .assert.attributeContains('[class*="left-buttons"] button:last-child', 'aria-label', 'Next');
  },

  'Displays an action header with custom content': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/clinical-action-header/children-action-header`)
      .assert.elementPresent('#CustomContent');
  },
});
