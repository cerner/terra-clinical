Terra.describeViewports('ClinicalResultBloodPressure', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure/clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });
});
