/* global before, browser, Terra */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('Clinical Item View', () => {
  describe('with one column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-displays' });
    Terra.should.beAccessible({ viewports, selector: '#test-displays' });
  });

  describe('with two column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-displays-two' });
    Terra.should.beAccessible({ viewports, context: '#test-displays-two' });
  });

  describe('with two column and start displays', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-displays-two-start' });
    Terra.should.beAccessible({ viewports, context: '#test-displays-two-start' });
  });

  describe('with accessories', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/accessory-item-view');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('with default comment set', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/comment-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#ItemView1' });
  });

  describe('with truncated comment set', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/comment-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#ItemView2' });
  });

  describe('with the full example word wrap', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#ItemView-one-wrap' });
  });

  describe('with the full example truncated', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#ItemView-two-truncate' });
  });
});
