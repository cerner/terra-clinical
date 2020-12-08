Terra.describeViewports('Clinical Item View', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('with one column displays', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');

    Terra.validates.element('with one column', { selector: '#test-displays' });
    Terra.validates.element('with two columns', { selector: '#test-displays-two' });
    Terra.validates.element('with two column and start displays', { selector: '#test-displays-two-start' });
  });

  it('with accessories', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view');

    Terra.validates.element('with accessories');
  });

  it('with default comment set', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view');

    Terra.validates.element('comment', { selector: '#ItemView1' });
    Terra.validates.element('truncated comment', { selector: '#ItemView2' });
  });

  it('with the full example word wrap', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');

    Terra.validates.element('with word wrap in one column', { selector: '#ItemView-one-wrap' });
    Terra.validates.element('with word wrap in two columns', { selector: '#ItemView-two-wrap' });
  });
});

Terra.describeViewports('Clinical Item View', ['enormous'], () => {
  it('with the full example truncated - one truncated', () => {
    browser.url('/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');

    Terra.validates.element('with truncation in one column', { selector: '#ItemView-one-wrap' });
    Terra.validates.element('with truncation in two columns', { selector: '#ItemView-two-wrap' });
  });
});
