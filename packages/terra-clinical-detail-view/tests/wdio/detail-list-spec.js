const selector = '#root';

Terra.describeViewports('Detail List', ['tiny', 'small', 'medium', 'large', 'huge'], () => {
  it('Displays a default Detail List with a title and list', () => {
    browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list');

    Terra.validates.element('title and list', { selector });
  });

  it('Displays a default Detail List with a title and large list', () => {
    browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list');

    Terra.validates.element('title and large list', { selector });
  });
});
