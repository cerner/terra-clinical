Terra.describeViewports('ClinicalResultBloodPressure', ['medium'], () => {
  it('displays a default ClinicalResultBloodPressure', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/clinical-result-blood-pressure');

    Terra.validates.element('default');
  });

  it('displays a ClinicalResultBloodPressure with truncated data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/truncated-clinical-result-blood-pressure');

    Terra.validates.element('with truncated data');
  });

  it('displays a ClinicalResultBloodPressure with extra displays', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/extra-displays-clinical-result-blood-pressure');
    Terra.validates.element('with extra displays');
  });

  it('displays a decorated ClinicalResultBloodPressure', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/decorated-clinical-result-blood-pressure');

    Terra.validates.element('decorated');
  });

  it('displays an unverified ClinicalResultBloodPressure', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/unverified-clinical-result-blood-pressure');

    Terra.validates.element('unverified');
  });

  it('displays a ClinicalResultBloodPressure with different units', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/different-units-clinical-result-blood-pressure');

    Terra.validates.element('with different units');
  });

  it('displays a ClinicalResultBloodPressure with interpretations', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/interpretations-blood-pressure-result');

    Terra.validates.element('with interpretations');
  });

  it('displays a ClinicalResultBloodPressure with no data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/no-data-clinical-result-blood-pressure');

    Terra.validates.element('with no data');
  });
});
