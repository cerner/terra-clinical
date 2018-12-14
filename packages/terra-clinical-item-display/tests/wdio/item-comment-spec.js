const viewports = Terra.viewports('tiny', 'medium');

describe('ItemComment', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Text', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/text-item-comment'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});

describe('ItemComment - Themeable', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('large')[0]);
  });

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment'));
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-clinical-item-display-item-comment-color': '#75767d',
        '--terra-clinical-item-display-item-comment-inline-icon-color': 'rgba(117, 118, 125, 0.3)',
      },
    });
  });
});
