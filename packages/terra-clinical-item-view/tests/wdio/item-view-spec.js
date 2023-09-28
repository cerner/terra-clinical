Terra.describeViewports('Clinical Item View', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('renders with displays', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');

    Terra.validates.element('with one column', { selector: '#test-displays' });
    Terra.validates.element('with two columns', { selector: '#test-displays-two' });
    Terra.validates.element('with two column and start displays', { selector: '#test-displays-two-start' });
  });

  it('renders with displays by row', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view-by-row');

    Terra.validates.element('with two columns by row', { selector: '#test-displays-two-row' });
    Terra.validates.element('with two columns and start displays by row', { selector: '#test-displays-two-row-start' });
  });

  it('renders with accessories', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view');

    Terra.validates.element('with accessories');
  });

  it('renders with blank lines', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/blank-display-item-view');

    Terra.validates.element('with blank line in one column', { selector: '#test-blank-displays' });
    Terra.validates.element('with blank lines in two columns', { selector: '#test-blank-displays-two' });
  });

  it('renders with default comment set', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view');

    Terra.validates.element('comment', { selector: '#ItemView1' });
    Terra.validates.element('truncated comment', { selector: '#ItemView2' });
  });

  it('renders with word wrap', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');

    Terra.validates.element('with word wrap in one column', { selector: '#ItemView-one-wrap' });
    Terra.validates.element('with word wrap in two columns', { selector: '#ItemView-two-wrap' });
  });

  it('renders with word wrap by row', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view-by-row');

    Terra.validates.element('with word wrap in two columns by row', { selector: '#ItemView-by-row-two-wrap' });
  });

  it('renders with override default styling', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/styling-override-item-view');

    Terra.validates.element('with override styling');
  });
});

Terra.describeViewports('Clinical Item View', ['enormous'], () => {
  it('renders with truncation', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');

    Terra.validates.element('with truncation in one column', { selector: '#ItemView-one-truncate' });
    Terra.validates.element('with truncation in two columns', { selector: '#ItemView-two-truncate' });
  });
});

Terra.describeViewports('Clinical Item View', ['enormous'], () => {
  it('renders with by row truncation', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view-by-row');

    Terra.validates.element('with truncation in two columns by row', { selector: '#ItemView-by-row-two-truncate' });
  });
});

