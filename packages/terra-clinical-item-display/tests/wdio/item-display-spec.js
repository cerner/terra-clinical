Terra.viewports('tiny', 'medium').forEach((viewport) => {
  describe('ItemDisplay', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('default', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/default-item-display'));
      Terra.it.validatesElement();
    });

    describe('text style', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/text-style-item-display'));
      Terra.it.validatesElement();
    });

    describe('disabled', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/disabled-item-display'));
      Terra.it.validatesElement();
    });

    describe('icon', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/icon-item-display'));
      Terra.it.validatesElement();
    });

    describe('scaling', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/scaling-icon-item-display'));
      Terra.it.validatesElement();
    });
  });
});
