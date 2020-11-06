Terra.describeViewports('FlowsheetResultCell', ['medium'], () => {
  it('displays a default FlowsheetResultCell', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/flowsheet-result-cell');

    Terra.validates.element('default');
  });

  it('displays a FlowsheetResultCell with no data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/no-data-flowsheet-result-cell');

    Terra.validates.element('with no data');
  });

  it('displays a FlowsheetResultCell with paddingStyles', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/paddingstyle-flowsheet-result-cell');

    Terra.validates.element('with paddingStyles');
  });

  it('displays a FlowsheetResultCell with multiple', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/multiple-flowsheet-result-cell');

    Terra.validates.element('with multiple');
  });

  it('displays a FlowsheetResultCell with interpretations', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/interpretations-result-cell');

    Terra.validates.element('with interpretations');
  });

  it('displays a unverified FlowsheetResultCell', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/unverified-flowsheet-result-cell');

    Terra.validates.element('unverified');
  });

  it('displays a decorated FlowsheetResultCell', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/decorated-flowsheet-result-cell');

    Terra.validates.element('decorated');
  });

  it('displays a FlowsheetResultCell with result error', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/has-result-error-flowsheet-result-cell');

    Terra.validates.element('with result error');
  });

  it('displays a FlowsheetResultCell with numeric overflow', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/numeric-overflow-flowsheet-result-cell');

    Terra.validates.element('with numeric overflow');
  });

  it('displays a FlowsheetResultCell with truncation', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/truncated-flowsheet-result-cell');

    Terra.validates.element('with truncated');
  });

  it('displays a FlowsheetResultCell entered in error', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell/entered-in-error-flowsheet-result-cell');

    Terra.validates.element('entered in error');
  });
});
