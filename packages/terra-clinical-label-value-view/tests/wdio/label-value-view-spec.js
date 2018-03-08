/* global browser, before, Terra */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');
// Remove once #306 is resolved
const rules = { 'color-contrast': { enabled: false } };

describe('Label Value View', () => {
  describe('when no value input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-label-value-view/default-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    // Remove {rules} once #306 is resolved
    Terra.should.beAccessible({ rules });
  });

  describe('when a text input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-label-value-view/text-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    // Remove {rules} once #306 is resolved
    Terra.should.beAccessible({ rules });
  });

  describe('when a node input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-label-value-view/text-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    // Remove {rules} once #306 is resolved
    Terra.should.beAccessible({ rules });
  });

  describe('when a text input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-label-value-view/text-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    // Remove {rules} once #306 is resolved
    Terra.should.beAccessible({ rules });
  });
});
