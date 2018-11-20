const viewports = Terra.viewports('tiny', 'medium');

describe('ItemComment', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Text', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/text-item-comment'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
