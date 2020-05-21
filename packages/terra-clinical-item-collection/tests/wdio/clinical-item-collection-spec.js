Terra.describeViewports('Item Collection', ['large'], () => {
  describe('Displays an item collection with all possible elements', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements');
    });

    Terra.it.validatesElement();
  });
});
