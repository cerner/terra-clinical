export default {
  accessibilityRules: { label: { enabled: false } },
  steps: [
    {
      name: 'Cannot select number of weeks that exceede age',
      selector: '#root',
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'weeks');
        global.browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        global.browser.setValue('[data-terra-clinical-onset-picker="age"] input', 6);
        global.browser.click('button[type="submit"]');
        global.browser.pause(2900);
      },
    },
    {
      name: 'Cannot select months duration if age is less than a month old',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        expect(() => global.browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'months')).to.throw('element could not be located');
      },
    },
  ],
};
