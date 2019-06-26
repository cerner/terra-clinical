Terra.describeViewports('Label Value View', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('when no value input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view');
    });

    Terra.it.validatesElement();
  });

  describe('when a text input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/text-value-label-value-view');
    });

    Terra.it.validatesElement();
  });

  describe('when a node input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/node-value-label-value-view');
    });

    Terra.it.validatesElement();
  });

  describe('when text and node inputs are provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/multiple-value-label-value-view');
    });

    Terra.it.validatesElement();
  });
});
