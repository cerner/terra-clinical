describe('Label Value View Theme', () => {
  describe('when no value input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-label-value-view-label-color': 'purple',
      },
    });
  });
});
