// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const axeOptions = {
  // https://github.com/cerner/terra-clinical/issues/378
  'color-contrast': { enabled: false },
};

const testSetup = {
  examples: {
    'Item Collection All Elements': {
      parentName: 'Displays an item collection with all possible elements',
    },
    'Item Collection Selectable': {
      parentName: 'Displays a Detail View with provided components and when title size is smaller',
      axeOptions,
    },
    'Item Collection Table Styles': {
      parentName: 'Displays an item collection with table styles',
      axeOptions,
    },
    'Item Collection List Styles': {
      parentName: 'Displays an item collection with list styles',
    },
    'Item Collection Item Styles': {
      parentName: 'Displays an item collection with styles applied to list items',
    },
    'Item Collection Varying Items': {
      parentName: 'Displays an item collection with items with varying content',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-item-collection',
  testSetup,
});

Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous').forEach((viewport) => {
  describe('Item Collection', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Returns child key for click when onSelect is given to a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
        browser.waitForValue('#item1', 3000);
        browser.click('#item1');
        browser.click('#selected-key');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: axeOptions });
    });

    describe('Returns child key for ENTER when onSelect is given to a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
        // eslint-disable-next-line no-unused-expressions
        expect(browser.element('#item2')).to.exist;
        browser.keys(['Tab', 'Tab', 'Tab', 'Enter']);
        browser.click('#selected-key');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: axeOptions });
    });

    describe('Returns child key for SPACE when onSelect is given to a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
        // eslint-disable-next-line no-unused-expressions
        expect(browser.element('#item3')).to.exist;
        browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'Tab', ' ']);
        browser.click('#selected-key');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: axeOptions });
    });
  });
});
