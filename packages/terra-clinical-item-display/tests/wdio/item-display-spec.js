const viewports = Terra.viewports('tiny', 'medium');

describe('ItemDisplay', () => {
  describe('default', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/default-item-display'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('text style', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/text-style-item-display'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-clinical-item-display-v2-attention-color': 'pink',
        '--terra-clinical-item-display-v2-secondary-color': 'green',
      },
    });
  });

  describe('disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/disabled-item-display'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-clinical-item-display-v2-disabled-inline-icon-opacity': '0.5',
        '--terra-clinical-item-display-v2-disabled-inline-icon-color': 'rgba(255, 0, 0, 1)',
      },
    });
  });

  describe('icon', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/icon-item-display'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-clinical-item-display-v2-inline-icon-padding-right': '10px',
      },
    });
  });

  describe('scaling', () => {
    before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/scaling-icon-item-display'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
