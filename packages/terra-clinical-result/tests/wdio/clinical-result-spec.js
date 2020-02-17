// Terra.describeViewports('Clinical Result', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
/*
Terra.describeViewports('Clinical Result', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/default-result');
    });

    Terra.it.validatesElement();
  });

  describe('with truncated data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/truncated-result');
    });

    Terra.it.validatesElement();
  });

  describe('with extra displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-extra-displays');
    });

    Terra.it.validatesElement();
  });

  describe('decorated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/decorated-clinical-result');
    });

    Terra.it.validatesElement();
  });

  describe('decorated with hidden unit', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/decorated-clinical-result-hide-unit');
    });

    Terra.it.validatesElement();
  });
});

Terra.describeViewports('ClinicalResultBloodPressure', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('with truncated data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/truncated-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('with extra displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/extra-displays-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('decorated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/decorated-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });

  describe('different units', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/different-units-clinical-result-blood-pressure');
    });

    Terra.it.validatesElement();
  });
});

Terra.describeViewports('Observation', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/observation');
    });

    Terra.it.validatesElement();
  });

  describe('with unit hidden', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/hidden-unit-observation');
    });

    Terra.it.validatesElement();
  });

  describe('bad data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/bad-data-observation');
    });

    Terra.it.validatesElement();
  });

  describe('null data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/null-observation');
    });

    Terra.it.validatesElement();
  });

  describe('interpretations', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/interpretations-observation');
    });

    Terra.it.validatesElement();
  });
});

Terra.describeViewports('FlowsheetResultCell', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('no data', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/no-data-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('paddingStyles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/paddingstyle-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });

  describe('multiple', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/multiple-flowsheet-result-cell');
    });

    Terra.it.validatesElement();
  });
});
*/
Terra.describeViewports('ResultNameHeaderCell', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-name-header-cell');
    });

    Terra.it.validatesElement();
  });

  describe('paddingStyles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/paddingstyle-result-name-header-cell');
    });

    Terra.it.validatesElement();
  });

  describe('typeIndicators', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/type-indicator-result-name-header-cell');
    });

    Terra.it.validatesElement();
  });
});
/*
Terra.describeViewports('ResultTimeHeaderCell', ['medium'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-time-header-cell');
    });

    Terra.it.validatesElement();
  });

  describe('with date hidden', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/result-time-header-cell-hide-date');
    });

    Terra.it.validatesElement();
  });

  describe('paddingStyles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-result/clinical-result/paddingstyle-result-time-header-cell');
    });

    Terra.it.validatesElement();
  });
});
*/
