Terra.describeViewports('Clinical Item View', ['large'], () => {
  describe('with one column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
    });

    Terra.it.validatesElement({ selector: '#test-displays' });
  });
});
