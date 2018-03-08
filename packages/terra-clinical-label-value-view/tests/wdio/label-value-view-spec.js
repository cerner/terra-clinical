/* global browser, before, Terra */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('Label Value View', () => {
  describe('when no value input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-label-value-view/default-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('when a text input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-label-value-view/text-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('when a node input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-label-value-view/text-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('when a text input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-label-value-view/text-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
