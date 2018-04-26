/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('ResultView', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/default-result-view'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Truncated', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/truncated-result-view'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('with Align End', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/align-end-result-view'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports, selector: '#root' });
  });

  describe('with Separator', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/result-view-with-separator'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Not Truncated', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/result-view-not-truncated'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('with no Time Display', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/result-view-no-time-display'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  // Testing Themable Variables

  describe('Separator with themable variables', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/result-view-with-separator'));

    Terra.should.themeEachCustomProperty(
      '#root',
      {
        '--result-view-result-separator-padding-left': '8px',
        '--result-view-result-separator-padding-right': '8px',
      },
    );
  });

  describe('Not Truncated with themable variables', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/result-view-not-truncated'));

    Terra.should.themeEachCustomProperty(
      '#root',
      {
        '--result-view-background-color': '#c00',
        '--result-view-line-height': '50px',
        '--result-view-body-padding': '20px',
        '--result-view-indicator-padding-right': '10px',
        '--result-view-result-age-text-color': '#c00',
        '--result-view-result-age-font-size': '10px',
        '--result-view-result-unit-text-color': '#c00',
      },
    );
  });
});
