Terra.viewports('tiny', 'medium').forEach((viewport) => {
  describe('ItemComment', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Default', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment'));
      Terra.should.validateElement();
    });

    describe('Text', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/text-item-comment'));
      Terra.should.validateElement();
    });
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
