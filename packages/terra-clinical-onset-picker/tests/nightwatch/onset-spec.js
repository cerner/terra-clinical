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
      .assert.elementPresent('.terra-onset')
      .assert.elementPresent('select[name="precision"]')
      .assert.elementPresent('select[name="granularity"]');
  },

  'Displays no additional options when UNKNOWN precision selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="precision"]', 'UNKNOWN')
      .assert.elementNotPresent('select[name="granularity"]');
  },

  // Year granularity
  'Displays only year selection when Year granularity selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'YEAR')
      .assert.elementNotPresent('select[name="month"]')
      .assert.elementPresent('select[name="year"]');
  },

  'Cannot select years before birthdate': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'MONTHYEAR')
      .setValue('select[name="year"]', 2010)
      .expect.element('select[name="year"]').to.have.value.not.equals(2010);
  },

  'Cannot select years after current date': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'MONTHYEAR')
      .setValue('select[name="year"]', 2150)
      .expect.element('select[name="year"]').to.have.value.not.equals(2150);
  },

  // Month/Year Granularity
  'Displays month and year selection when Month/Year granularity selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'MONTHYEAR')
      .assert.elementPresent('select[name="month"]')
      .assert.elementPresent('select[name="year"]');
  },

  'Cannot select months before birthdate if selected year is the birth year': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'MONTHYEAR')
      .setValue('select[name="year"]', 2011)
      .setValue('select[name="month"]', 2)
      .expect.element('select[name="month"]').to.have.value.not.equals(2);
  },

  // TODO: fuck I don't know how to specificy a time
  'Cannot select months after current date if selected year is current year': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'MONTHYEAR');
      // .setValue('select[name="year"]', moment().year())
      // .setValue('select[name="month"]', 2)
      // .expect.element('select[name="month"]').to.have.value.not.equals(2);
  },

  // Date granularity
  'Displays date input when Date granularity is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'DATE')
      .assert.elementNotPresent('select[name="year"]')
      .assert.elementNotPresent('select[name="month"]')
      .assert.elementPresent('.terra-DatePicker-input');
  },

  // Age granularity
  'Displays age inputs when Age granularity is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'AGE')
      .assert.elementPresent('input[name="ageCalcCount"]')
      .assert.elementPresent('select[name="ageCalcDuration"]');
  },

  'Cannot select number of years greater than age': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'AGE')
      .setValue('select[name="ageCalcDuration"]', 'years')
      .setValue('input[name="ageCalcCount"]', 10)
      .expect.element('input[name="ageCalcCount"]').to.have.value.not.equals(10);
  },

  'Cannot select more than 24 months': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'AGE')
      .setValue('select[name="ageCalcDuration"]', 'months')
      .setValue('input[name="ageCalcCount"]', 30)
      .expect.element('input[name="ageCalcCount"]').to.have.value.not.equals(30);
  },

  'Cannot select number of months that exceede age': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/LessYear`)
      .setValue('select[name="granularity"]', 'AGE')
      .setValue('select[name="ageCalcDuration"]', 'months')
      .setValue('input[name="ageCalcCount"]', 20)
      .expect.element('input[name="ageCalcCount"]').to.have.value.not.equals(20);
  },

  'Cannot select more than 8 weeks': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .setValue('select[name="granularity"]', 'AGE')
      .setValue('select[name="ageCalcDuration"]', 'weeks')
      .setValue('input[name="ageCalcCount"]', 15)
      .expect.element('input[name="ageCalcCount"]').to.have.value.not.equals(15);
  },

  'Cannot select number of weeks that exceede age': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/LessMonth`)
      .setValue('select[name="granularity"]', 'AGE')
      .setValue('select[name="ageCalcDuration"]', 'weeks')
      .setValue('input[name="ageCalcCount"]', 6)
      .expect.element('input[name="ageCalcCount"]').to.have.value.not.equals(6);
  },

  'Cannot select years duration if age is less than a year old': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/LessYear`)
      .setValue('select[name="granularity"]', 'AGE')
      .setValue('select[name="ageCalcDuration"]', 'years')
      .expect.element('select[name="ageCalcDuration"]').to.have.value.not.equals('years');
  },

  'Cannot select months duration if age is less than a month old': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/LessMonth`)
      .setValue('select[name="granularity"]', 'AGE')
      .setValue('select[name="ageCalcDuration"]', 'months')
      .expect.element('select[name="ageCalcDuration"]').to.have.value.not.equals('months');
  },
};
