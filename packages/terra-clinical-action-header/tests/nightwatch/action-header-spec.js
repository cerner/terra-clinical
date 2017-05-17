/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;
const fs = require('fs');
const path = require('path');

function loadTranslationsForLocale(locale) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', `${locale}.json`), 'utf8'));
}

const deTranslations = loadTranslationsForLocale('de');
const enGBTranslations = loadTranslationsForLocale('en-GB');
const enUSTranslations = loadTranslationsForLocale('en-US');
const esTranslations = loadTranslationsForLocale('es');
const frTranslations = loadTranslationsForLocale('fr');
const ptTranslations = loadTranslationsForLocale('pt');

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
      .expect.element('.terraClinical-Header').to.be.present;
  },
  'Displays an action header with title': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-title`);
  },
  'Displays an action header with back button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-back`)
      .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child').to.be.present;

    browser
      .waitForElementVisible('select', 1000)
      .click('select option[value="de"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
      .which.equals(deTranslations['Terra.Clinical.ActionHeader.back']);

    browser
      .click('select option[value="en-GB"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
      .which.equals(enGBTranslations['Terra.Clinical.ActionHeader.back']);

    browser
      .click('select option[value="en-US"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
      .which.equals(enUSTranslations['Terra.Clinical.ActionHeader.back']);

    browser
      .click('select option[value="es"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
      .which.equals(esTranslations['Terra.Clinical.ActionHeader.back']);

    browser
      .click('select option[value="fr"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
      .which.equals(frTranslations['Terra.Clinical.ActionHeader.back']);

    browser
      .click('select option[value="pt"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
      .which.equals(ptTranslations['Terra.Clinical.ActionHeader.back']);
  },
  'Displays an action header with close button': (browser) => {
    const width = browser.globals.width;
    if (width < windowSizes.small[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-close`)
        .waitForElementVisible('.terraClinical-ActionHeader-leftButtons > :first-child', 1000)
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child').to.be.present;

      browser
        .waitForElementVisible('select', 1000)
        .click('select option[value="de"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(deTranslations['Terra.Clinical.ActionHeader.back']);

      browser
        .click('select option[value="en-GB"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(enGBTranslations['Terra.Clinical.ActionHeader.back']);

      browser
        .click('select option[value="en-US"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(enUSTranslations['Terra.Clinical.ActionHeader.back']);

      browser
        .click('select option[value="es"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(esTranslations['Terra.Clinical.ActionHeader.back']);

      browser
        .click('select option[value="fr"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(frTranslations['Terra.Clinical.ActionHeader.back']);

      browser
        .click('select option[value="pt"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(ptTranslations['Terra.Clinical.ActionHeader.back']);
    } else {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-close`)
        .waitForElementVisible('.terraClinical-ActionHeader-rightButtons > :first-child', 1000)
        .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child').to.be.present;

      browser
        .waitForElementVisible('select', 1000)
        .click('select option[value="de"]')
        .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(deTranslations['Terra.Clinical.ActionHeader.close']);

      browser
        .click('select option[value="en-GB"]')
        .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(enGBTranslations['Terra.Clinical.ActionHeader.close']);

      browser
        .click('select option[value="en-US"]')
        .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(enUSTranslations['Terra.Clinical.ActionHeader.close']);

      browser
        .click('select option[value="es"]')
        .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(esTranslations['Terra.Clinical.ActionHeader.close']);

      browser
        .click('select option[value="fr"]')
        .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(frTranslations['Terra.Clinical.ActionHeader.close']);

      browser
        .click('select option[value="pt"]')
        .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(ptTranslations['Terra.Clinical.ActionHeader.close']);
    }
  },
  'Displays an action header with maximize button': (browser) => {
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

      browser
        .waitForElementVisible('select', 1000)
        .click('select option[value="de"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(deTranslations['Terra.Clinical.ActionHeader.maximize']);

      browser
        .click('select option[value="en-GB"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(enGBTranslations['Terra.Clinical.ActionHeader.maximize']);

      browser
        .click('select option[value="en-US"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(enUSTranslations['Terra.Clinical.ActionHeader.maximize']);

      browser
        .click('select option[value="es"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(esTranslations['Terra.Clinical.ActionHeader.maximize']);

      browser
        .click('select option[value="fr"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(frTranslations['Terra.Clinical.ActionHeader.maximize']);

      browser
        .click('select option[value="pt"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(ptTranslations['Terra.Clinical.ActionHeader.maximize']);
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

      browser
        .waitForElementVisible('select', 1000)
        .click('select option[value="de"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(deTranslations['Terra.Clinical.ActionHeader.minimize']);

      browser
        .click('select option[value="en-GB"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(enGBTranslations['Terra.Clinical.ActionHeader.minimize']);

      browser
        .click('select option[value="en-US"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(enUSTranslations['Terra.Clinical.ActionHeader.minimize']);

      browser
        .click('select option[value="es"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(esTranslations['Terra.Clinical.ActionHeader.minimize']);

      browser
        .click('select option[value="fr"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(frTranslations['Terra.Clinical.ActionHeader.minimize']);

      browser
        .click('select option[value="pt"]')
        .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child > :first-child').to.have.attribute('aria-label')
        .which.equals(ptTranslations['Terra.Clinical.ActionHeader.minimize']);
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
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-previous-next`)
      .expect.element('.terraClinical-ActionHeader-leftButtons > :first-child').to.be.present;

    browser
      .waitForElementVisible('select', 1000)
      .click('select option[value="de"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :first-child > *')
      .to.have.attribute('aria-label')
      .which.equals(deTranslations['Terra.Clinical.ActionHeader.previous']);

    browser
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :last-child > *')
      .to.have.attribute('aria-label')
      .which.equals(deTranslations['Terra.Clinical.ActionHeader.next']);

    browser
      .click('select option[value="en-GB"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :first-child > *')
      .to.have.attribute('aria-label')
      .which.equals(enGBTranslations['Terra.Clinical.ActionHeader.previous']);

    browser
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :last-child > *')
      .to.have.attribute('aria-label')
      .which.equals(enGBTranslations['Terra.Clinical.ActionHeader.next']);

    browser
      .click('select option[value="en-US"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :first-child > *')
      .to.have.attribute('aria-label')
      .which.equals(enUSTranslations['Terra.Clinical.ActionHeader.previous']);

    browser
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :last-child > *')
      .to.have.attribute('aria-label')
      .which.equals(enUSTranslations['Terra.Clinical.ActionHeader.next']);

    browser
      .click('select option[value="es"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :first-child > *')
      .to.have.attribute('aria-label')
      .which.equals(esTranslations['Terra.Clinical.ActionHeader.previous']);

    browser
      .click('select option[value="fr"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :first-child > *')
      .to.have.attribute('aria-label')
      .which.equals(frTranslations['Terra.Clinical.ActionHeader.previous']);

    browser
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :last-child > *')
      .to.have.attribute('aria-label')
      .which.equals(frTranslations['Terra.Clinical.ActionHeader.next']);

    browser
      .click('select option[value="pt"]')
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :first-child > *')
      .to.have.attribute('aria-label')
      .which.equals(ptTranslations['Terra.Clinical.ActionHeader.previous']);

    browser
      .expect.element('.terraClinical-ActionHeader-leftButtons > * > :last-child > *')
      .to.have.attribute('aria-label')
      .which.equals(ptTranslations['Terra.Clinical.ActionHeader.next']);
  },
  'Displays an action header with custom content': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/action-header-tests/action-header-child`)
      .expect.element('.terraClinical-ActionHeader-rightButtons > :first-child').to.be.present;
  },
};
