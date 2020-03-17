Terra.describeViewports('ClinicalResultBloodPressure', ['medium'], () => {
  describe('default', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/clinical-result-blood-pressure');
    Terra.it.validatesElement();
  });

  describe('with truncated data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/truncated-clinical-result-blood-pressure');
    Terra.it.validatesElement();
  });

  describe('with extra displays', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/extra-displays-clinical-result-blood-pressure');
    Terra.it.validatesElement();
  });

  describe('decorated', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/decorated-clinical-result-blood-pressure');
    Terra.it.validatesElement();
  });

  describe('unverified', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/unverified-clinical-result-blood-pressure');
    Terra.it.validatesElement();
  });

  describe('different units', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/different-units-clinical-result-blood-pressure');
    Terra.it.validatesElement();
  });

  describe('interpretations', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/interpretations-blood-pressure-result');
    Terra.it.validatesElement();
  });

  describe('no data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/no-data-clinical-result-blood-pressure');
    Terra.it.validatesElement();
  });
});
