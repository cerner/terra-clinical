export default {
  accessibilityRules: { label: { enabled: false } },
  steps: [
    {
      name: 'Cannot select number of months that exceede age',
      selector: '#root',
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        global.browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'months');
        global.browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        global.browser.setValue('[data-terra-clinical-onset-picker="age"] input', 20);
        global.browser.click('button[type="submit"]');
        global.browser.pause(2900);
      },
    },
    {
      name: 'Cannot select years duration if age is less than a year old',
      refreshUrl: true,
      action: () => {
        global.browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        expect(() => global.browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'years')).to.throw('element could not be located');
      },
    },
  ],
};
