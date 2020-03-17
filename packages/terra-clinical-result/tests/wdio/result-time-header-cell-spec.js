Terra.describeViewports('ResultTimeHeaderCell', ['medium'], () => {
  describe('default', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-time-header-cell/result-time-header-cell');
    Terra.it.validatesElement();
  });

  describe('with date hidden', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-time-header-cell/result-time-header-cell-hide-date');
    Terra.it.validatesElement();
  });

  describe('paddingStyles', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-time-header-cell/padding-style-result-time-header-cell');
    Terra.it.validatesElement();
  });
});
