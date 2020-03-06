Terra.describeViewports('FlowsheetResultCell', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('no data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/no-data-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('paddingStyles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/paddingstyle-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('multiple', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/multiple-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('interpretations', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/interpretations-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('unverified', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/unverified-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });
});
