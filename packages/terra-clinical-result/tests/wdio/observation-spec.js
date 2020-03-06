Terra.describeViewports('Observation', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/observation');
    });

    Terra.it.validatesElement();
  });

  describe('with unit hidden', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/hidden-unit-observation');
    });

    Terra.it.validatesElement();
  });

  describe('bad data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/bad-data-observation');
    });

    Terra.it.validatesElement();
  });

  describe('null data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/null-observation');
    });

    Terra.it.validatesElement();
  });

  describe('interpretations', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/interpretations-observation');
    });

    Terra.it.validatesElement();
  });

  describe('is unverifieed', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation/is-unverified-observation');
    });

    Terra.it.validatesElement();
  });
});
