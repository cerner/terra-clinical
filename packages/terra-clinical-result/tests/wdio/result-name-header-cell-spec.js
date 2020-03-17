Terra.describeViewports('ResultNameHeaderCell', ['medium'], () => {
  describe('default', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/result-name-header-cell');
    Terra.it.validatesElement();
  });

  describe('paddingStyles', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/padding-style-result-name-header-cell');
    Terra.it.validatesElement();
  });

  describe('typeIndicators', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/type-indicator-result-name-header-cell');
    Terra.it.validatesElement();
  });
});
