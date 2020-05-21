Terra.describeViewports('Label Value View', ['large'], () => {
  describe('when no value input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view');
    });

    Terra.it.validatesElement();
  });
});
