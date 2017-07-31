/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-embedded-content-consumer', done);
  },

  'Displays a provider embedded in the consumer that contains title text.': (browser) => {
    const consumerSrc = '#/tests/embedded-content-consumer-tests/basic-consumer';
    const providerSrc = '#/tests/embedded-content-consumer-tests/basic-provider';

    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/${consumerSrc}`)
    // Wait for the consumer to load the provider.
    .waitForElementPresent(`iframe[src*="${providerSrc}"]`, 1000)
    // Identify the embedded iframe.
    .element('css selector', `iframe[src*="${providerSrc}"]`, (frame) => {
      browser.frame({ ELEMENT: frame.value.ELEMENT }, () => {
        // Validate the provider has been accurately loaded.
        browser.expect.element('h1').text.to.equal('Basic content');
      });
    // Reset the frame back to the parent frame.
    }).frame(null);
  },

  'Displays a provider embedded in the consumer that triggers after initialization is complete.': (browser) => {
    const consumerSrc = '#/tests/embedded-content-consumer-tests/on-ready-consumer';
    const providerSrc = '#/tests/embedded-content-consumer-tests/on-ready-provider';

    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/${consumerSrc}`)
    // Wait for the consumer to load the provider.
    .waitForElementPresent(`iframe[src*="${providerSrc}"]`, 1000)
    // Identify the embedded iframe.
    .element('css selector', `iframe[src*="${providerSrc}"]`, (frame) => {
      browser.frame({ ELEMENT: frame.value.ELEMENT }, () => {
        // Validate the provider has been accurately loaded.
        browser.expect.element('h1').text.to.equal('On Ready Events');
        // Validate the provider before onReady is invoked.
        browser.expect.element('p#ready').text.to.equal('');
        // Pause the test briefly till the onReady callback is invoked.
        browser.pause(1000);
        // Validate the provider after onReady is invoked.
        browser.expect.element('p#ready').text.to.equal('onReady function being executed after a 1 second delay.');
      });
    // Reset the frame back to the parent frame.
    }).frame(null);
  },

  'Displays a provider embedded in the consumer that triggers a custom event.': (browser) => {
    const consumerSrc = '#/tests/embedded-content-consumer-tests/custom-events-consumer';
    const providerSrc = '#/tests/embedded-content-consumer-tests/custom-events-provider';

    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/${consumerSrc}`)
    // Wait for the consumer to load the provider.
    .waitForElementPresent(`iframe[src*="${providerSrc}"]`, 1000)
    // Validate the provider before the custom event handler is invoked.
    .expect.element('div#CustomEvents').to.have.css('border').which.equals('0px none rgb(28, 31, 33)');
    // Pause the test briefly till the custom handler is invoked.
    browser.pause(1000);
    // Validate the provider after the custom event handler is invoked.
    browser.expect.element('div#CustomEvents').to.have.css('border').which.equals('5px dashed rgb(0, 0, 255)');
  },
};
