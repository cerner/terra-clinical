/* global browser, describe, it, expect, before, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('ItemDisplay', () => {
  describe('default', () => {
    before(() => browser.url('/#/tests/item-display-tests/default'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('text style', () => {
    before(() => browser.url('/#/tests/item-display-tests/text-style'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('disabled', () => {
    before(() => browser.url('/#/tests/item-display-tests/disabled'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('icon', () => {
    before(() => browser.url('/#/tests/item-display-tests/icon'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('scaling', () => {
    before(() => browser.url('/#/tests/item-display-tests/scaling'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
