Terra.describeViewports('ItemDisplay', ['tiny', 'medium'], () => {
  it('displays a default ItemDisplay', () => {
    browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/default-item-display');
    Terra.validates.element('default');
  });

  it('displays an ItemDisplay with text style', () => {
    browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/text-style-item-display');
    Terra.validates.element('with text style');
  });

  // TODO: remove this test and corresponding snapshots in the next major release.
  it('displays a disabled ItemDisplay', () => {
    browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/disabled-item-display');
    Terra.validates.element('disabled');
  });

  it('displays a ItemDisplay with an icon', () => {
    browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/icon-item-display');
    Terra.validates.element('with icon');
  });

  it('displays an ItemDisplay with a scaled icon', () => {
    browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/scaling-icon-item-display');
    Terra.validates.element('with scaled icon');
  });
});
