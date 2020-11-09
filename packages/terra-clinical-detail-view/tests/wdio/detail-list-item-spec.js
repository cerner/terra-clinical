Terra.describeViewports('Detail List Item', ['tiny', 'small', 'medium', 'large', 'huge'], () => {
  it('Displays a Detail List Item as expected', () => {
    browser.url('/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item/default-list-item');

    Terra.validates.element('default');
  });
});
