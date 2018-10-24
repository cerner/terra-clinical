export default {
  accessibilityRules: { label: { enabled: false } },
  steps: [
    {
      name: 'when unknown precision selected',
      action: () => {
        global.browser.selectByAttribute('[name*="test-precision"]', 'value', 'unknown');
      },
    },
    {
      name: 'Displays year selection only when Year granularity selected',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
      },
    },
    {
      name: 'Can select a year between the birthdate and current year',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2015);
      },
    },
    {
      name: 'Cannot select a year before the birthdate',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
        expect(() => global.browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2010)).to.throw('element could not be located');
      },
    },
    {
      name: 'Cannot select a year in the future',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
        expect(() => global.browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2017)).to.throw('element could not be located');
      },
    },
    {
      name: 'Displays month and year selection only when Month-Year granularity selected',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
      },
    },
    {
      name: 'Can select a month between the birthdate and current date',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2015);
        global.browser.selectByVisibleText('[data-terra-clinical-onset-picker="month"] select', 'April');
      },
    },
    {
      name: 'Cannot select a month before the birthdate',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2011);
        expect(() => global.browser.selectByAttribute('[data-terra-clinical-onset-picker="month"] select', 'value', 'February')).to.throw('element could not be located');
      },
    },
    {
      name: 'Cannot select a month in the future',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2016);
        expect(() => global.browser.selectByAttribute('[data-terra-clinical-onset-picker="month"] select', 'value', 'October')).to.throw('element could not be located');
      },
    },
    {
      name: 'Displays date input when Date granularity is selected',
      refreshUrl: true,
      action: () => {
        global.browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'date');
      },
    },
    {
      name: 'Displays age inputs when Age granularity is selected',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
      },
    },
  ],
};
