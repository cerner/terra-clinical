describe('Detail View Theme', () => {
  describe('Displays a divided Detail View with provided components', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#root',
      properties: {
        '--terra-detail-view-subtitle-color': 'purple',
        '--terra-detail-view-accessory-color': 'red',
        '--terra-detail-view-divider-border-color': 'yellow',
        '--terra-detail-view-footer-text-color': 'green',
      },
    });
  });
});
