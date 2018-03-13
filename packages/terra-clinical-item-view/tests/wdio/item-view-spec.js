/* global before, browser, Terra */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');
// Issue occurring because of common accessoryEnd in the test examples.
const rules = { 'duplicate-id': { enabled: false } };

describe('Clinical Item View', () => {
  describe('with one column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-displays' });
    Terra.should.beAccessible();
  });

  describe('with two column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-displays-two' });
    Terra.should.beAccessible();
  });

  describe('with two column and start displays', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-displays-two-start' });
    Terra.should.beAccessible();
  });

  describe('with accessories', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/accessory-item-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ rules });
  });

  describe('with default comment set', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/comment-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#ItemView1' });
    Terra.should.beAccessible({ rules });
  });

  describe('with truncated comment set', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/comment-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#ItemView2' });
    Terra.should.beAccessible({ rules });
  });

  describe('with the full example word wrap  one column', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#ItemView-one-wrap' });
    Terra.should.beAccessible({ rules });
  });

  describe('with the full example word wrap - two column', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#ItemView-two-wrap' });
    Terra.should.beAccessible({ rules });
  });

  describe('with the full example truncated - one truncated', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ selector: '#ItemView-one-truncate' });
    Terra.should.beAccessible({ rules });
  });

  describe('with the full example truncated - two truncated', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ selector: '#ItemView-one-truncate' });
    Terra.should.beAccessible({ rules });
  });
});
