/* global before, browser, Terra */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');
const selector = '#root';

describe('Item View', () => {
  describe('Displays a clinical item view with default props', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/default-item-view');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays a clinical item view with displays present', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays a clinical item view with various accessory', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/accessory-item-view');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays a clinical item view with a comment set', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/comment-item-view');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays a clinical item view with the word wrap and truncation', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });
});
