Terra.describeViewports('Label Value View', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('when no value input is provided', () => {
    browser.url('/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view');

    Terra.validates.element('no value');
  });

  it('when a text input is provided', () => {
    browser.url('/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/text-value-label-value-view');

    Terra.validates.element('text value');
  });

  it('when a node input is provided', () => {
    browser.url('/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/node-value-label-value-view');

    Terra.validates.element('node value');
  });

  it('when text and node inputs are provided', () => {
    browser.url('/raw/tests/terra-clinical-label-value-view/clinical-label-value-view/multiple-value-label-value-view');

    Terra.validates.element('text and node value');
  });
});
