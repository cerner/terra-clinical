/* global browser, describe, it, expect, before, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('ErrorView', () => {
  // See Issue #235. Remove when resloved.
  // Message received: "No Violation. Ensures the contrast between foreground and background
  //     colors meets WCAG 2 AA contrast ratio thresholds."
  // Impact: Serious
  // Description: "Insufficient color contrast of 1.64 (foreground color: #c8cacb, background
  //     color: #ffffff)"
  const rules = {
    'color-contrast': { enabled: false },
  };

  describe('default', () => {
    before(() => browser.url('/#/raw/tests/clinical-error-view/default-error-view'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('with name and description', () => {
    before(() => browser.url('/#/raw/tests/clinical-error-view/text-error-view'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('with button', () => {
    before(() => browser.url('/#/raw/tests/clinical-error-view/button-error-view'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('with glyph hidden', () => {
    before(() => browser.url('/#/raw/tests/clinical-error-view/hidden-error-view'));
    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
  });
});
