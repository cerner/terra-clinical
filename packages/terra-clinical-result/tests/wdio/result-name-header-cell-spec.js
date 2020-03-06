Terra.describeViewports('ResultNameHeaderCell', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/result-name-header-cell');
    });

    Terra.it.validatesElement();
  });

  describe('paddingStyles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/paddingstyle-result-name-header-cell');
    });

    Terra.it.validatesElement();
  });

  describe('typeIndicators', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/type-indicator-result-name-header-cell');
    });

    Terra.it.validatesElement();
  });
});
