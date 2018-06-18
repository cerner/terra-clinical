/* global browser, before, Terra */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');
// Remove once #306 is resolved
const rules = { 'color-contrast': { enabled: false } };

describe('Label Value View', () => {
  describe('when no value input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-label-value-view-label-color': 'purple',
      },
    });
    // Remove {rules} once #306 is resolved
    Terra.should.beAccessible({ rules });
  });

  describe('when a text input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/text-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    // Remove {rules} once #306 is resolved
    Terra.should.beAccessible({ rules });
  });

  describe('when a node input is provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/node-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    // Remove {rules} once #306 is resolved
    Terra.should.beAccessible({ rules });
  });

  describe('when text and node inputs are provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/multiple-value-label-value-view');
    });

    Terra.should.matchScreenshot({ viewports });
    // Remove {rules} once #306 is resolved
    Terra.should.beAccessible({ rules });
  });
});
