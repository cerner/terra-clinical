// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default action header': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/action-header-tests/action-header`)
      .assert.elementPresent('#ActionHeader');
  },

  'Displays an action header with title': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/action-header-tests/action-header-title`)
      .assert.elementPresent('#ActionHeader');
  },

  'Displays an action header with back button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/action-header-tests/action-header-back`)
      .assert.elementPresent('[class*="left-buttons"] > button')
      .assert.attributeContains('[class*="left-buttons"] > button', 'aria-label', 'Back');
  },

  'Displays an action header with close button': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/action-header-tests/action-header-close`);
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

  'Displays an action header with maximize button': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/action-header-tests/action-header-maximize`);
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
    browser.url(`${browser.launchUrl}/#/tests/action-header-tests/action-header-minimize`);
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
    browser.url(`${browser.launchUrl}/#/tests/action-header-tests/action-header-back-close`);
    browser
      .assert.elementPresent('#ActionHeader [class*="left-buttons"] > button')
      .assert.attributeContains('#ActionHeader [class*="left-buttons"] > button', 'aria-label', 'Back');
    browser
      .assert.elementPresent('#ActionHeader [class*="right-buttons"] > button')
      .assert.attributeContains('#ActionHeader [class*="right-buttons"] > button', 'aria-label', 'Close');
  },

  'Displays an action header with a previous-next button-group': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/action-header-tests/action-header-previous-next`);
    browser
      .assert.elementPresent('[class*="left-buttons"] button:first-child')
      .assert.attributeContains('[class*="left-buttons"] button:first-child', 'aria-label', 'Previous');
    browser
      .assert.elementPresent('[class*="left-buttons"] button:last-child')
      .assert.attributeContains('[class*="left-buttons"] button:last-child', 'aria-label', 'Next');
  },

  'Displays an action header with custom content': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/action-header-tests/action-header-child`)
      .assert.elementPresent('#CustomContent');
  },
});
