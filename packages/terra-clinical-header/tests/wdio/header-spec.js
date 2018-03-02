/* global browser, expect, Terra, before */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('Clinical header', () => {
  describe('Displays a default header with no content', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-header/default-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays a header with a title only', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-header/title-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays a header with a long title that truncates', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-header/long-title-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays a header with content on the left', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-header/left-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays a header with content on the right', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-header/right-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays a header with content on the left and right', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-header/left-and-right-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays a header with a long title that truncates with left and right content', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-header/long-title-and-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays a subsection header with content on the left and right', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-header/left-and-right-content-subheader');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays a header with no title and content on the right', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-header/no-title-right-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });
});