Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous').forEach((viewport) => {
  describe('Label Value View', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('when no value input is provided', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view');
      });

      Terra.should.validateElement();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-clinical-label-value-view-label-color': 'purple',
        },
      });
    });

    describe('when a text input is provided', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/text-value-label-value-view');
      });

      Terra.should.validateElement();
    });

    describe('when a node input is provided', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/node-value-label-value-view');
      });

      Terra.should.validateElement();
    });

    describe('when text and node inputs are provided', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/multiple-value-label-value-view');
      });

      Terra.should.validateElement();
    });
  });
});
