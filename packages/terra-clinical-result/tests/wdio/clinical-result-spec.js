// Terra.describeViewports('Clinical Result', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
Terra.describeViewports('Clinical Result', ['medium'], () => {
  describe('default clinical result', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/default-result');
    });

    Terra.it.validatesElement();
  });

  describe('when bad data is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/bad-data-clinical-result');
    });

    Terra.it.validatesElement();
  });
});
