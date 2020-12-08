Terra.describeViewports('ItemComment', ['tiny', 'medium'], () => {
  it('displays a default ItemComment', () => {
    browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment');
    Terra.validates.element('default');
  });

  it('displays an ItemComment with text', () => {
    browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/text-item-comment');
    Terra.validates.element('with text');
  });
});
