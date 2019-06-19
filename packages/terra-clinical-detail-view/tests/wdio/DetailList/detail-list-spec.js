const selector = '#root';

Terra.describeViewports('Detail List', ['tiny', 'small', 'medium', 'large', 'huge'], () => {
  describe('Displays a default Detail List with a title and list', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list');
    });

    Terra.it.validatesElement({ selector });
  });

  describe('Displays a default Detail List with a title and large list', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list');
    });

    Terra.it.validatesElement({ selector });
  });
});
