Terra.describeViewports('Observation', ['medium'], () => {
  describe('default', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/observation');
    Terra.it.validatesElement();
  });

  describe('with unit hidden', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/hidden-unit-observation');
    Terra.it.validatesElement();
  });

  describe('bad data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/bad-data-observation');
    Terra.it.validatesElement();
  });

  describe('interpretations', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/interpretations-observation');
    Terra.it.validatesElement();
  });

  describe('is unverified', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/is-unverified-observation');
    Terra.it.validatesElement();
  });
});
