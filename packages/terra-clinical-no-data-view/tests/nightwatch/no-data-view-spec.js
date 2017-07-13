// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-no-data-view', done);
  },

  'Displays a default no data view': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/no-data-view-tests/default`)
      .assert.elementPresent('#NoDataView');
  },
  'Displays a no data view with text for name and description': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/no-data-view-tests/text`)
      .assert.elementPresent('#NoDataView')
      .assert.containsText('#NoDataView p:nth-of-type(1)', 'test heading')
      .assert.containsText('#NoDataView p:nth-of-type(2)', 'test subtext');
  },
  'Displays a no data view with content': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/no-data-view-tests/content`)
      .assert.containsText('#NoDataView p', 'content inserted here');
  },
  'Displays a no data view with glyph hidden': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/no-data-view-tests/hidden`)
      .assert.elementNotPresent('#NoDataView svg');
  },
};
