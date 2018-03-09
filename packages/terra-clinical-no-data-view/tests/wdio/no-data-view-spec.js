/* global before, browser, Terra */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');
const rules = { 'color-contrast': { enabled: false } };

describe('No Data View', () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-no-data-view/default-no-data-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('with text for name and description', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-no-data-view/text-no-data-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ rules });
  });

  describe('with content', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-no-data-view/content-no-data-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('with glyph hidden', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-no-data-view/hidden-no-data-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });
});
