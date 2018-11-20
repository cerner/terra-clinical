describe('Clinical Item View Theme', () => {
  describe('with one column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#test-displays',
      properties: {
        '--terra-item-view-content-color': 'green',
        '--terra-item-view-content-primary-color': 'purple',
        '--terra-item-view-content-secondary-color': 'maroon',
      },
    });
  });
});
