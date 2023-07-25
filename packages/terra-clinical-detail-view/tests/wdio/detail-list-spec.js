const selector = '#root';

Terra.describeViewports('Detail List', ['tiny', 'small', 'medium', 'large', 'huge'], () => {
  it('Displays a default Detail List with a title and list', () => {
    browser.url('/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list');

    Terra.validates.element('title and list', { selector });
  });

  it('Displays a default Detail List with a title and large list', () => {
    browser.url('/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list');

    Terra.validates.element('title and large list', { selector });
  });

  it('Displays a Detail List with a list item that spans the width of the list when there is an odd number of children', () => {
    browser.url('/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/list-item-spans-list-width');

    Terra.validates.element('list with item that spans list width', { selector });
  });
});
