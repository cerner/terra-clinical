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
      .assert.elementPresent('.terraClinical-NoDataView');
  },
  'Displays a no data view with text for name and description': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/no-data-view-tests/text`)
      .assert.containsText('.terraClinical-NoDataView .terraClinical-NoDataView-heading', 'test heading')
      .assert.containsText('.terraClinical-NoDataView .terraClinical-NoDataView-subtext', 'test subtext')
      .assert.elementPresent('.terraClinical-NoDataView');
  },
  'Displays a no data with a button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/no-data-view-tests/content`)
      .assert.elementPresent('.terraClinical-NoDataView')
      .assert.containsText('.terraClinical-NoDataView-subtextContent', 'content inserted here');
  },
  'Displays a no data view with glyph hidden': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/no-data-view-tests/hidden`)
      .assert.elementNotPresent('.terraClinical-NoDataView-glyph');
  },
};
