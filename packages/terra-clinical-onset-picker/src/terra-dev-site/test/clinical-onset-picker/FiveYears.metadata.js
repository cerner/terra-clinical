export default {
  accessibilityRules: { label: { enabled: false } },
  steps: [
    {
      name: 'Cannot select number of years greater than age',
      selector: '#root',
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'years');
        global.browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        global.browser.setValue('[data-terra-clinical-onset-picker="age"] input', 10);
        global.browser.click('button[type="submit"]');
        global.browser.pause(2900);
      },
    },
    {
      name: 'Cannot select more than 24 months',
      selector: '#root',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'months');
        global.browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        global.browser.setValue('[data-terra-clinical-onset-picker="age"] input', 30);
        global.browser.click('button[type="submit"]');
        global.browser.pause(2900);
      },
    },
    {
      name: 'Cannot select more than 8 weeks',
      selector: '#root',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'weeks');
        global.browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        global.browser.setValue('[data-terra-clinical-onset-picker="age"] input', 15);
        global.browser.click('button[type="submit"]');
        global.browser.pause(2900);
      },
    },
    {
      name: 'When precision is changed an event is fired to the precisionSelectOnChange callback',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-precision"]', 'value', 'unknown');
        global.browser.click('button[type="submit"]');
      },
    },
    {
      name: 'When granularity is changed an event is fired to the granularitySelectOnChange callback',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        global.browser.click('button[type="submit"]');
      },
    },
    {
      name: 'When onsetDate is changed by the month select an event is fired to the onsetDateInputOnChange callback',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
        global.browser.selectByVisibleText('[data-terra-clinical-onset-picker="month"] select', 'October');
        global.browser.click('button[type="submit"]');
      },
    },
    {
      name: 'When onsetDate is changed by the year select an event is fired to the onsetDateInputOnChange callback',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2016);
        global.browser.click('button[type="submit"]');
      },
    },
    {
      name: 'When onsetDate is changed by the age input an event is fired to the onsetDateInputOnChange callback',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'years');
        global.browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        global.browser.setValue('[data-terra-clinical-onset-picker="age"] input', 4);
        global.browser.click('button[type="submit"]');
      },
    },
    {
      name: 'When onsetDate is changed by the ageUnit select an event is fired to the onsetDateInputOnChange callback',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        global.browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        global.browser.setValue('[data-terra-clinical-onset-picker="age"] input', 4);
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'years');
        global.browser.click('button[type="submit"]');
        global.browser.pause(2900);
      },
    },
  ],
};
