export default {
  accessibilityRules: {
    // https://github.com/cerner/terra-clinical/issues/378
    'color-contrast': { enabled: false },
  },
  steps: [
    {
      name: 'Displays a selectable item collection',
    },
    {
      name: 'Returns child key for click when onSelect is given to a selectable item collection',
      action: () => {
        global.browser.waitForValue('#item1', 3000);
        global.browser.click('#item1');
        global.browser.click('#selected-key');
      },
    },
    {
      name: 'Returns child key for ENTER when onSelect is given to a selectable item collection',
      action: () => {
        // eslint-disable-next-line no-unused-expressions
        expect(global.browser.element('#item2')).to.exist;
        global.browser.keys(['Tab', 'Tab', 'Tab', 'Enter']);
        global.browser.click('#selected-key');
      },
    },
    {
      name: 'Returns child key for SPACE when onSelect is given to a selectable item collection',
      action: () => {
        // eslint-disable-next-line no-unused-expressions
        expect(global.browser.element('#item3')).to.exist;
        global.browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'Tab', ' ']);
        global.browser.click('#selected-key');
      },
    },
  ],
};
