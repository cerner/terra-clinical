Terra.describeViewports('Clinical Item View', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('renders with a null display', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/null-item-view');

    Terra.validates.element('with a null display');
  });

  it('renders with displays', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');

    Terra.validates.element('with one column', { selector: '#test-displays' });
    Terra.validates.element('with two columns', { selector: '#test-displays-two' });
    Terra.validates.element('with two column and start displays', { selector: '#test-displays-two-start' });
  });

  it('renders with a singular display', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/single-display-item-view');

    Terra.validates.element('with a singular display', { selector: '#test-single-display' });
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

  it('renders with a custom content width', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/content-width-item-view');

    Terra.validates.element('with custom content width', { selector: '#test-displays' });
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

