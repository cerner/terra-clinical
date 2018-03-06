/* global before, browser, Terra, expect */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('Item Collection', () => {
  describe('Displays a item collection with all possibe elements', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-all-elements');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays the correct collection when responding to breakpoint', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-all-elements');
      browser.execute("document.getElementById('site').style.padding = 0;");
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays a selectable item collection', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-selectable');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Returns child key for click when onSelect is given to a selectable item collection', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-selectable');
      browser.click('#item1');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Returns child key for ENTER when onSelect is given to a selectable item collection', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-selectable');
      expect(browser.element('#item2')).to.exist;
      browser.keys(['\uE004', '\uE004', '\uE004', '\uE007']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Returns child key for SPACE when onSelect is given to a selectable item collection', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-selectable');
      expect(browser.element('#item3')).to.exist;
      browser.keys(['\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE00D']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays an item collection with table styles', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-table-styles');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays an item collection with list styles', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-list-styles');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays an item collection with styles applied to list items', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-item-styles');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays an item collection with items with varying content', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-item-collection/item-collection-varying-items');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
