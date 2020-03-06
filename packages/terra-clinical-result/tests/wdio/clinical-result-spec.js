Terra.describeViewports('ClinicalResult', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/default-result');
    });

    Terra.it.validatesElement();
  });

  describe('with truncated data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/truncated-result');
    });

    Terra.it.validatesElement();
  });

  describe('with extra displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/clinical-result-extra-displays');
    });

    Terra.it.validatesElement();
  });

  describe('decorated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/decorated-clinical-result');
    });

    Terra.it.validatesElement();
  });

  describe('unverified', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/unverified-clinical-result');
    });

    Terra.it.validatesElement();
  });

  describe('decorated with hidden unit', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/decorated-clinical-result-hide-unit');
    });

    Terra.it.validatesElement();
  });

  describe('interpretations', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result/interpretations-result');
    });

    Terra.it.validatesElement();
  });
});
