/* eslint no-unused-expressions: 0 */
const ignoredA11y = {
  // https://github.com/cerner/terra-clinical/issues/378
  'color-contrast': { enabled: false },
};

Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous').forEach((viewport) => {
  describe('Item Collection', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Displays an item collection with all possible elements', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('Displays the correct collection when responding to breakpoint', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('Displays a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: ignoredA11y });
    });

    describe('Returns child key for click when onSelect is given to a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
        browser.waitForValue('#item1');
        browser.click('#item1');
        browser.click('#selected-key');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: ignoredA11y });
    });

    describe('Returns child key for ENTER when onSelect is given to a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
        expect(browser.element('#item2')).to.exist;
        browser.keys(['Tab', 'Tab', 'Tab', 'Enter']);
        browser.click('#selected-key');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: ignoredA11y });
    });

    describe('Returns child key for SPACE when onSelect is given to a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
        expect(browser.element('#item3')).to.exist;
        browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'Tab', ' ']);
        browser.click('#selected-key');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: ignoredA11y });
    });

    describe('Displays an item collection with table styles', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-table-styles');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: ignoredA11y });
    });

    describe('Displays an item collection with list styles', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-list-styles');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('Displays an item collection with styles applied to list items', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-item-styles');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('Displays an item collection with items with varying content', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-varying-items');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });
  });
});
