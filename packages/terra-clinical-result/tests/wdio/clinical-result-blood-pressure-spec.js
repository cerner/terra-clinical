Terra.describeViewports('ClinicalResultBloodPressure', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('with truncated data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/truncated-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('with extra displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/extra-displays-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('decorated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/decorated-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('unverified', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/unverified-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('different units', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/different-units-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('interpretations', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/interpretations-blood-pressure-result');
    });

    Terra.it.validatesElement();
  });

  describe('single results of pair', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/single-result-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });
});
