Terra.describeViewports('FlowsheetResultCell', ['medium'], () => {
  describe('default', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/flowsheet-result-cell');
    Terra.it.validatesElement();
  });

  describe('no data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/no-data-flowsheet-result-cell');
    Terra.it.validatesElement();
  });

  describe('paddingStyles', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/paddingstyle-flowsheet-result-cell');
    Terra.it.validatesElement();
  });

  describe('multiple', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/multiple-flowsheet-result-cell');
    Terra.it.validatesElement();
  });

  describe('interpretations', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/interpretations-result-cell');
    Terra.it.validatesElement();
  });

  describe('unverified', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/unverified-flowsheet-result-cell');
    Terra.it.validatesElement();
  });

  describe('decorated', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/decorated-flowsheet-result-cell');
    Terra.it.validatesElement();
  });

  describe('result error', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/has-result-error-flowsheet-result-cell');
    Terra.it.validatesElement();
  });

  describe('numeric overflow', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/numeric-overflow-flowsheet-result-cell');
    Terra.it.validatesElement();
  });
});
