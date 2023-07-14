Terra.describeViewports('ResultTimeHeaderCell', ['medium'], () => {
  it('default', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-time-header-cell/result-time-header-cell');

    Terra.validates.element('default');
  });

  it('with date hidden', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-time-header-cell/result-time-header-cell-hide-date');

    Terra.validates.element('with date hidden');
  });

  it('paddingStyles', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-time-header-cell/padding-style-result-time-header-cell');

    Terra.validates.element('with paddingStyles');
  });

  it('displays within a semantic table', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-time-header-cell/semantic-table-with-result-time-header-cell');

    Terra.validates.element('with semantic table');
  });
});
