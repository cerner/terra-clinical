describe('Item Display Theme', () => {
  describe('text style', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/text-style-item-display'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-item-display-attention-color': 'pink',
        '--terra-item-display-secondary-color': 'green',
      },
    });
  });

  describe('disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/disabled-item-display'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-item-display-disabled-inline-icon-color': 'rgba(255, 0, 0, 1)',
      },
    });
  });
});
