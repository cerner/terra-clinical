Terra.describeViewports('Observation', ['medium'], () => {
  it('displays a default Observation', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/observation');

    Terra.validates.element('default');
  });

  it('displays an Observation with unit hidden', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/hidden-unit-observation');

    Terra.validates.element('with unit hidden');
  });

  it('displays an Observation with bad data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/bad-data-observation');

    Terra.validates.element('with bad data');
  });

  it('displays an Observation with interpretations', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/interpretations-observation');

    Terra.validates.element('with interpretations');
  });

  it('displays an unverified Observation', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/is-unverified-observation');

    Terra.validates.element('unverified');
  });
});
