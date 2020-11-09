const selector = '#root';

Terra.describeViewports('Detail View', ['tiny', 'small', 'medium', 'large', 'huge'], () => {
  it('Displays a divided Detail View with provided components', () => {
    browser.url('/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided');

    Terra.validates.element('divided', { selector });
  });

  it('Displays a Detail View that is not divided with provided components', () => {
    browser.url('/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-no-divider');

    Terra.validates.element('not divided', { selector });
  });

  it('Displays a Detail View with provided components and when title size is smaller', () => {
    browser.url('/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided-smaller-titles');

    Terra.validates.element('with smaller title', { selector });
  });

  it('Displays a Detail View with overflowed title text', () => {
    browser.url('/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-overflow-text');

    Terra.validates.element('with overflowed title', { selector });
  });
});
