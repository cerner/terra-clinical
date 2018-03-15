/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('ResultView', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/result-view/default-result-view'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
