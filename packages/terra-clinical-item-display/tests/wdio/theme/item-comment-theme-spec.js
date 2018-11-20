describe('Item Comment Theme', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('large')[0]);
  });

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment'));
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-clinical-item-comment-color': '#75767d',
        '--terra-clinical-item-comment-inline-icon-color': 'rgba(117, 118, 125, 0.3)',
      },
    });
  });
});
