const selector = '#root';

Terra.describeViewports('Detail List', ['medium'], () => {
  describe('Displays a default Detail List with a title and list', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list');
    });

    Terra.it.validatesElement({ selector });
  });
});
