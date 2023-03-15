Terra.describeViewports('Clinical header', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('Header with no content', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/default-header');

    Terra.validates.element('no content');
  });

  it('Header with a title only', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/title-header');

    Terra.validates.element('only title');
  });

  it('Header with a long title that truncates', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/long-title-header');

    Terra.validates.element('truncated title');
  });

  it('Header with content on the left', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/left-content-header');

    Terra.validates.element('content on left');
  });

  it('Header with content on the right', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/right-content-header');

    Terra.validates.element('content on right');
  });

  it('Header with content on both sides', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/left-and-right-content-header');

    Terra.validates.element('content on both sides');
  });

  it('Header with a long title that truncates with content', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/long-title-and-content-header');

    Terra.validates.element('truncated title with content');
  });

  it('Subsection header with content on both sides', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/left-and-right-content-subheader');

    Terra.validates.element('subsection with content');
  });

  it('Header with no title and content on the right', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/no-title-right-content-header');

    Terra.validates.element('no title with content on right');
  });

  it('Header used to label different regions', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/labeling-regions');

    Terra.validates.element('labeling regions');
  });

  it('Header with long title and children', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/long-title-and-children-header');

    Terra.validates.element('long title with children');
  });

  it('Header with no level and no title', () => {
    browser.url('/raw/tests/terra-clinical-header/clinical-header/no-level-header');

    Terra.validates.element('no level and no title');
  });
});
