Terra.describeViewports('ClinicalResult', ['medium'], () => {
  describe('default', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/default-result');
    Terra.it.validatesElement();
  });

  describe('with truncated data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/truncated-result');
    Terra.it.validatesElement();
  });

  describe('with extra displays', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/clinical-result-extra-displays');
    Terra.it.validatesElement();
  });

  describe('decorated', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/decorated-clinical-result');
    Terra.it.validatesElement();
  });

  describe('unverified', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/unverified-clinical-result');
    Terra.it.validatesElement();
  });

  describe('decorated with hidden unit', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/decorated-clinical-result-hide-unit');
    Terra.it.validatesElement();
  });

  describe('interpretations', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/interpretations-result');
    Terra.it.validatesElement();
  });

  describe('with result error', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/has-result-error-result');
    Terra.it.validatesElement();
  });

  describe('with has result no data', () => {
    browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/has-result-no-data-result');
    Terra.it.validatesElement();
  });
});
