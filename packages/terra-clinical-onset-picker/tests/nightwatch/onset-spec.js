// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

// Current date is locked to September 20, 2016 in test components
module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {

  'Displays a default Onset picker': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .assert.elementPresent('[data-terra-clinical-onset-picker="true"]')
      .assert.elementPresent('select[name="test-precision"]')
      .assert.elementPresent('select[name="test-granularity"]');
  },

  // Unknown precision
  'Displays no additional options when UNKNOWN precision selected': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-precision"]', 'UNKNOWN')
      .assert.elementNotPresent('select[name="test-granularity"]');
  },

  // Year granularity
  'Displays year selection only when Year granularity selected': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'YEAR')
      .assert.elementNotPresent('[data-terra-clinical-onset-picker="month"] select')
      .assert.elementPresent('[data-terra-clinical-onset-picker="year"] select');
  },

  'Can select a year between the birthdate and current year': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'YEAR')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2015)
      .expect.element('[data-terra-clinical-onset-picker="year"] select').to.have.value.equals(2015);
  },

  'Cannot select a year before the birthdate': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'YEAR')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2010)
      .expect.element('[data-terra-clinical-onset-picker="year"] select').to.have.value.not.equals(2010);
  },

  'Cannot select a year in the future': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'YEAR')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2017)
      .expect.element('[data-terra-clinical-onset-picker="year"] select').to.have.value.not.equals(2017);
  },

  // Month Granularity
  'Displays month and year selection when Month/Year granularity selected': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTH')
      .assert.elementPresent('[data-terra-clinical-onset-picker="month"] select')
      .assert.elementPresent('[data-terra-clinical-onset-picker="year"] select');
  },

  'Can select month between birthdate and current date': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/onset-picker/default`);

    browser.setValue('select[name="test-granularity"]', 'MONTH')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2015)
      .setValue('[data-terra-clinical-onset-picker="month"] select', 'February');
    browser.expect.element('[data-terra-clinical-onset-picker="year"] select').to.have.value.equals(2015);
    browser.expect.element('[data-terra-clinical-onset-picker="month"] select').to.have.value.equals(1);
  },

  'Cannot select a month before the birthdate': (browser) => {
    browser
      .url(`${browser.launcherUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTH')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2011)
      .setValue('[data-terra-clinical-onset-picker="month"] select', 'February')
      .expect.element('[data-terra-clinical-onset-picker="month"] select').to.have.value.not.equals(1);
  },

  'Cannot select a month in the future': (browser) => {
    browser
      .url(`${browser.launcherUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTH')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2016)
      .setValue('[data-terra-clinical-onset-picker="month"] select', 'October')
      .expect.element('[data-terra-clinical-onset-picker="month"] select').to.have.value.not.equals(9);
  },

  // Date granularity
  'Displays date input when Date granularity is selected': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'DATE')
      .assert.elementNotPresent('[data-terra-clinical-onset-picker="year"] select')
      .assert.elementNotPresent('[data-terra-clinical-onset-picker="month"] select')
      .assert.elementPresent('input[name="test-onsetDate"]');
  },

  // Age granularity
  'Displays age inputs when Age granularity is selected': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .assert.elementPresent('[data-terra-clinical-onset-picker="age"] input')
      .assert.elementPresent('[data-terra-clinical-onset-picker="age_unit"] select');
  },

  'Cannot select number of years greater than age': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/controlled`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"] select', 'years')
      .clearValue('[data-terra-clinical-onset-picker="age"] input')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 10)
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.not.contain('2021-09-20'); // 2011-09-20 + 10 years
  },

  'Cannot select more than 24 months': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/controlled`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"] select', 'months')
      .clearValue('[data-terra-clinical-onset-picker="age"] input')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 30)
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.not.contain('2014-03-20'); // 2011-09-20 + 30 months
  },

  'Cannot select number of months that exceede age': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/less-year`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"] select', 'months')
      .clearValue('[data-terra-clinical-onset-picker="age"] input')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 20)
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.not.contain('2017-06-20'); // 2016-09-20 - 11 months + 20 months
  },

  'Cannot select more than 8 weeks': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/controlled`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"] select', 'weeks')
      .clearValue('[data-terra-clinical-onset-picker="age"] input')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 15)
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.not.contain('2012-01-03'); // 2011-09-20 + 15 weeks
  },

  'Cannot select number of weeks that exceede age': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/less-month`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"] select', 'weeks')
      .clearValue('[data-terra-clinical-onset-picker="age"] input')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 6)
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.not.contain('2016-10-11'); // 2016-09-20 - 3 weeks + 6 weeks
  },

  'Cannot select years duration if age is less than a year old': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/less-year`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"] select', 'years')
      .expect.element('[data-terra-clinical-onset-picker="age_unit"]').to.have.value.not.equals('years');
  },

  'Cannot select months duration if age is less than a month old': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/less-month`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"] select', 'months')
      .expect.element('[data-terra-clinical-onset-picker="age_unit"]').to.have.value.not.equals('months');
  },

  // Util methods

  // onChange handlers
  'When precision is changed an event is fired to the precisionSelectOnChange callback': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/controlled`)
      .setValue('select[name="test-precision"]', 'Unknown')
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.contain('UNKNOWN');
  },

  'When granularity is changed an event is fired to the granularitySelectOnChange callback': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/controlled`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.contain('AGE');
  },

  'When onsetDate is changed by the month select an event is fired to the onsetDateInputOnChange callback': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/controlled`)
      .setValue('select[name="test-granularity"]', 'MONTH')
      .setValue('[data-terra-clinical-onset-picker="month"] select', 'October')
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.contain('2013-10-14');
  },

  'When onsetDate is changed by the year select an event is fired to the onsetDateInputOnChange callback': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/controlled`)
      .setValue('select[name="test-granularity"]', 'YEAR')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2016)
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.contain('2016-02-14');
  },

  'When onsetDate is changed by the age input an event is fired to the onsetDateInputOnChange callback': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/controlled`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"] select', 'years')
      .clearValue('[data-terra-clinical-onset-picker="age"] input') // CLEAR FIRST, SET VALUE APPENDS THE NEW VALUE
      .setValue('[data-terra-clinical-onset-picker="age"] input', 4)
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.contain('2015-09-20');
  },

  'When onsetDate is change by the ageUnit select an event is fired to the onsetDateInputOnChange callback': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/controlled`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"] select', 'years') // Switching age unit resets to 1
      .click('button[type="submit"]')
      .expect.element('[data-test-json="true"]').text.to.contain('2012-09-20');
  },
});
