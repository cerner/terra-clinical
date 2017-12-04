/* global browser, describe, it, expect, before, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('ErrorView', () => {
  // See Issue #235. Remove when resloved.
  // Message received: "No Violation. Ensures the contrast between foreground and background
  //     colors meets WCAG 2 AA contrast ratio thresholds."
  // Impact: Serious
  // Description: "Element has insufficient color contrast of 1.64 (foreground color: #c8cacb,
  //     background color: #ffffff, font size: 18.0pt, font weight: normal)"
  const rules = {
    'color-contrast': { enabled: false },
  };

  describe('default', () => {
    before(() => browser.url('/#/tests/error-view-tests/default'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('with name and description', () => {
    before(() => browser.url('/#/tests/error-view-tests/text'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('with button', () => {
    before(() => browser.url('/#/tests/error-view-tests/button'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('with glyph hidden', () => {
    before(() => browser.url('/#/tests/error-view-tests/hidden'));
    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
  });
});
