Terra.viewports('tiny', 'medium').forEach((viewport) => {
  describe('ItemComment', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Default', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment'));
      Terra.it.validatesElement();
    });

    describe('Text', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/text-item-comment'));
      Terra.it.validatesElement();
    });
  });
});
