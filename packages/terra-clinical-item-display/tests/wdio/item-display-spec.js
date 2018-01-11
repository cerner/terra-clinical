/* global browser, describe, it, expect, before, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('ItemDisplay', () => {
  describe('disabled', () => {
    before(() => browser.url('/#/tests/item-display-tests/disabled'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
