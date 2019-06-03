Terra.viewports('tiny', 'small', 'medium', 'large', 'huge').forEach((viewport) => {
  describe('Detail List Item', () => {
    describe('Displays a Detail List Item as expected', () => {
      before(() => {
        browser.setViewportSize(viewport);
        browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item/default-list-item');
      });

      Terra.it.validatesElement();
    });
  });
});
