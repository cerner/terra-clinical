Terra.describeViewports('FlowsheetResultCell', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/flowsheet-result-cell/flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('no data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/flowsheet-result-cell/no-data-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('paddingStyles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/flowsheet-result-cell/paddingstyle-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('multiple', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/flowsheet-result-cell/multiple-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });
});
