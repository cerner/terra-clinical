Terra.describeViewports('ResultNameHeaderCell', ['medium'], () => {
  it('displays a default ResultNameHeaderCell', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/result-name-header-cell');

    Terra.validates.element('default');
  });

  it('displays a ResultNameHeaderCell with paddingStyles', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/padding-style-result-name-header-cell');

    Terra.validates.element('with paddingStyles');
  });

  it('displays a ResultNameHeaderCell with typeIndicators', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/type-indicator-result-name-header-cell');

    Terra.validates.element('with typeIndicators');
  });

  it('displays within a semantic table', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell/semantic-table-with-result-name-header-cell');

    Terra.validates.element('with semantic table');
  });
});
