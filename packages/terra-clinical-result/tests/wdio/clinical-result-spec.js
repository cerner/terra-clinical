Terra.describeViewports('ClinicalResult', ['medium'], () => {
  it('displays a default ClinicalResult', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/default-result');

    Terra.validates.element('default');
  });

  it('displays a ClinicalResult with truncated data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/truncated-result');

    Terra.validates.element('with truncated data');
  });

  it('displays a ClinicalResult with extra displays', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/clinical-result-extra-displays');

    Terra.validates.element('with extra displays');
  });

  it('displays a decorated ClinicalResult', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/decorated-clinical-result');

    Terra.validates.element('decorated');
  });

  it('displays an unverified ClinicalResult', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/unverified-clinical-result');

    Terra.validates.element('unverified');
  });

  it('displays a ClinicalResult with hidden unit', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/decorated-clinical-result-hide-unit');

    Terra.validates.element('with hidden unit');
  });

  it('displays a ClinicalResult with interpretations', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/interpretations-result');

    Terra.validates.element('with interpretations');
  });

  it('displays a ClinicalResult with result error', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/has-result-no-data-result');

    Terra.validates.element('with result error');
  });

  it('displays a ClinicalResult with no data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/has-result-no-data-result');

    Terra.validates.element('with no data');
  });
});
