// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {

  'Displays a default Onset picker': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .assert.elementPresent('[data-terra-clinical-onset-picker="true"]')
      .assert.elementPresent('select[name="test-precision"]')
      .assert.elementPresent('select[name="test-granularity"]');
  },

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

  'Cannot select a year before the birthdate': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTHYEAR')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2010)
      .expect.element('[data-terra-clinical-onset-picker="year"] select').to.have.value.not.equals(2010);
  },

  'Cannot select a year in the future': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTHYEAR')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2150)
      .expect.element('[data-terra-clinical-onset-picker="year"] select').to.have.value.not.equals(2150);
  },

  // Month/Year Granularity
  'Displays month and year selection when Month/Year granularity selected': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTHYEAR')
      .assert.elementPresent('[data-terra-clinical-onset-picker="month"] select')
      .assert.elementPresent('[data-terra-clinical-onset-picker="year"] select');
  },

  'Cannot select a month in the future': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'MONTHYEAR')
      .setValue('[data-terra-clinical-onset-picker="year"] select', 2011)
      .setValue('[data-terra-clinical-onset-picker="month"] select', 2)
      .expect.element('[data-terra-clinical-onset-picker="month"] select').to.have.value.not.equals(2);
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
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"]', 'years')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 10)
      .expect.element('[data-terra-clinical-onset-picker="age"] input').to.have.value.not.equals(10);
  },

  'Cannot select more than 24 months': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"]', 'months')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 30)
      .expect.element('[data-terra-clinical-onset-picker="age"] input').to.have.value.not.equals(30);
  },

  'Cannot select number of months that exceede age': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/LessYear`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"]', 'months')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 20)
      .expect.element('[data-terra-clinical-onset-picker="age"] input').to.have.value.not.equals(20);
  },

  'Cannot select more than 8 weeks': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/default`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"]', 'weeks')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 15)
      .expect.element('[data-terra-clinical-onset-picker="age"] input').to.have.value.not.equals(15);
  },

  'Cannot select number of weeks that exceede age': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/LessMonth`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"]', 'weeks')
      .setValue('[data-terra-clinical-onset-picker="age"] input', 6)
      .expect.element('[data-terra-clinical-onset-picker="age"] input').to.have.value.not.equals(6);
  },

  'Cannot select years duration if age is less than a year old': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/LessYear`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"]', 'years')
      .expect.element('[data-terra-clinical-onset-picker="age_unit"]').to.have.value.not.equals('years');
  },

  'Cannot select months duration if age is less than a month old': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/onset-picker/LessMonth`)
      .setValue('select[name="test-granularity"]', 'AGE')
      .setValue('[data-terra-clinical-onset-picker="age_unit"]', 'months')
      .expect.element('[data-terra-clinical-onset-picker="age_unit"]').to.have.value.not.equals('months');
  },
});
