Terra.describeViewports('Item Collection', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('Displays an item collection with all possible elements', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements');
    });

    Terra.it.validatesElement();
  });

  describe('Displays the correct collection when responding to breakpoint', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements');
    });

    Terra.it.validatesElement();
  });

  describe('Displays a selectable item collection', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
    });

    Terra.it.validatesElement();
  });

  describe('Returns child key for click when onSelect is given to a selectable item collection', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
      browser.waitForValue('#item1');
      browser.leftClick('#item1'); // clicking a table row element in firefox is a bug. browser.leftClick() uses W3C actions.
      browser.click('#selected-key');
    });

    Terra.it.validatesElement();

    after(() => browser.moveToObject('#root', 0, 0));
  });

  describe('Returns child key for ENTER when onSelect is given to a selectable item collection', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
      expect(browser.element('#item2')).to.exist;
      browser.keys(['Tab', 'Tab', 'Tab', 'Enter']);
      browser.click('#selected-key');
    });

    Terra.it.validatesElement();

    after(() => browser.moveToObject('#root', 0, 0));
  });

  describe('Returns child key for SPACE when onSelect is given to a selectable item collection', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
      expect(browser.element('#item3')).to.exist;
      browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'Tab', ' ']);
      browser.click('#selected-key');
    });

    Terra.it.validatesElement();

    after(() => browser.moveToObject('#root', 0, 0));
  });

  describe('Displays an item collection with table styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-table-styles');
    });

    Terra.it.validatesElement();
  });

  describe('Displays an item collection with list styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-list-styles');
    });

    Terra.it.validatesElement();
  });

  describe('Displays an item collection with styles applied to list items', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-item-styles');
    });

    Terra.it.validatesElement();
  });

  describe('Displays an item collection with items with varying content', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-varying-items');
    });

    Terra.it.validatesElement();
  });
});
