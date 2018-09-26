const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge');

describe('Detail List Item', () => {
  describe('Displays a Detail List Item as expected', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item/default-list-item');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });
});
