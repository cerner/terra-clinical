// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-onset-picker', done);
  },

  'Displays a default Onset picker': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .assert.elementPresent('.terra-OnsetPicker')
      .assert.elementPresent('select[name="test-precision"]')
      .assert.elementPresent('select[name="test-granularity"]');
  },

  'Displays no additional options when UNKNOWN precision selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-precision"]', 'UNKNOWN')
      .assert.elementNotPresent('select[name="test-granularity"]');
  },

  // Year granularity
  'Displays year selection only when Year granularity selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'YEAR')
      .assert.elementNotPresent('.terra-OnsetPicker-month')
      .assert.elementPresent('.terra-OnsetPicker-year');
  },

  'Cannot select a year before the birthdate': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTHYEAR')
      .setValue('.terra-OnsetPicker-year', 2010)
      .expect.element('.terra-OnsetPicker-year').to.have.value.not.equals(2010);
  },

  'Cannot select a year in the future': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTHYEAR')
      .setValue('.terra-OnsetPicker-year', 2150)
      .expect.element('.terra-OnsetPicker-year').to.have.value.not.equals(2150);
  },

  // Month/Year Granularity
  'Displays month and year selection when Month/Year granularity selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTHYEAR')
      .assert.elementPresent('.terra-OnsetPicker-month')
      .assert.elementPresent('.terra-OnsetPicker-year');
  },

  'Cannot select a month in the future': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTHYEAR')
      .setValue('.terra-OnsetPicker-year', 2011)
      .setValue('.terra-OnsetPicker-month', 2)
      .expect.element('.terra-OnsetPicker-month').to.have.value.not.equals(2);
  },

  // Date granularity
  'Displays date input when Date granularity is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'DATE')
      .assert.elementNotPresent('.terra-OnsetPicker-year')
      .assert.elementNotPresent('.terra-OnsetPicker-month')
      .assert.elementPresent('input[name="test-onsetDate"]');
  },

  // Age granularity
  'Displays age inputs when Age granularity is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .assert.elementPresent('.terra-OnsetPicker-ageCalcCount')
      .assert.elementPresent('.terra-OnsetPicker-ageCalcDuration');
  },

  'Cannot select number of years greater than age': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('.terra-OnsetPicker-ageCalcDuration', 'years')
      .setValue('.terra-OnsetPicker-ageCalcCount', 10)
      .expect.element('.terra-OnsetPicker-ageCalcCount').to.have.value.not.equals(10);
  },

  'Cannot select more than 24 months': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('.terra-OnsetPicker-ageCalcDuration', 'months')
      .setValue('.terra-OnsetPicker-ageCalcCount', 30)
      .expect.element('.terra-OnsetPicker-ageCalcCount').to.have.value.not.equals(30);
  },

  'Cannot select number of months that exceede age': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/LessYear`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('.terra-OnsetPicker-ageCalcDuration', 'months')
      .setValue('.terra-OnsetPicker-ageCalcCount', 20)
      .expect.element('.terra-OnsetPicker-ageCalcCount').to.have.value.not.equals(20);
  },

  'Cannot select more than 8 weeks': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('.terra-OnsetPicker-ageCalcDuration', 'weeks')
      .setValue('.terra-OnsetPicker-ageCalcCount', 15)
      .expect.element('.terra-OnsetPicker-ageCalcCount').to.have.value.not.equals(15);
  },

  'Cannot select number of weeks that exceede age': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/LessMonth`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('.terra-OnsetPicker-ageCalcDuration', 'weeks')
      .setValue('.terra-OnsetPicker-ageCalcCount', 6)
      .expect.element('.terra-OnsetPicker-ageCalcCount').to.have.value.not.equals(6);
  },

  'Cannot select years duration if age is less than a year old': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/LessYear`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('.terra-OnsetPicker-ageCalcDuration', 'years')
      .expect.element('.terra-OnsetPicker-ageCalcDuration').to.have.value.not.equals('years');
  },

  'Cannot select months duration if age is less than a month old': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/LessMonth`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('.terra-OnsetPicker-ageCalcDuration', 'months')
      .expect.element('.terra-OnsetPicker-ageCalcDuration').to.have.value.not.equals('months');
  },
};
