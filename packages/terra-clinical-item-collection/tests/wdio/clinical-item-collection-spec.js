Terra.describeViewports('Item Collection', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('Displays an item collection with all possible elements', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements');
    Terra.validates.element('all elements');
  });

  it('Displays the correct collection when responding to breakpoint', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements');
    Terra.validates.element('responding to breakpoint');
  });

  it('Displays a selectable item collection', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
    Terra.validates.element('selectable');
  });

  it('Returns child key for click when onSelect is given to a selectable item collection', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
    browser.waitForValue('#item1');
    $('#item1').click({ button: 'left' }); // clicking a table row element in firefox is a bug. browser.leftClick() uses W3C actions.
    $('#selected-key').click();
    Terra.validates.element('return child key on click');
    $('#root').moveTo({ xoffset: 0, yoffset: 0 });
  });

  it('Returns child key for ENTER when onSelect is given to a selectable item collection', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
    expect($('#item2')).toExist();
    browser.keys(['Tab', 'Tab', 'Tab', 'Enter']);
    $('#selected-key').click();
    Terra.validates.element('return child key on enter');

    $('#root').moveToObject({ xoffset: 0, yoffset: 0 });
  });

  it('Returns child key for SPACE when onSelect is given to a selectable item collection', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable');
    expect($('#item3')).toExist();
    browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'Tab', ' ']);
    $('#selected-key').click();
    Terra.validates.element('return child key on space');
    $('#root').moveTo({ xoffset: 0, yoffset: 0 });
  });

  it('Displays an item collection with table styles', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-table-styles');

    Terra.validates.element('table styles');
  });

  it('Displays an item collection with list styles', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-list-styles');
    Terra.validates.element('list styles');
  });

  it('Displays an item collection with styles applied to list items', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-item-styles');
    Terra.validates.element('list item styles');
  });

  it('Displays an item collection with items with varying content', () => {
    browser.url('/raw/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-varying-items');
    Terra.validates.element('item with varying content');
  });
});
