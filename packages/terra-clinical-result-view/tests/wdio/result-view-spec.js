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
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/separator-result-view'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Not Truncated', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/not-truncated-result-view'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('with no Time Display', () => {
    beforeEach(() => browser.url('/#/raw/tests/clinical-result-view/no-time-display-result-view'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
