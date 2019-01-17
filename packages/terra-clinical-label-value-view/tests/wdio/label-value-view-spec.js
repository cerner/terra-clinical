const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('Label Value View', () => {
  describe('when no value input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-clinical-label-value-view-label-color': 'purple',
      },
    });
    Terra.should.beAccessible();
  });

  describe('when a text input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/text-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('when a node input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/node-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('when text and node inputs are provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/multiple-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });
});
