const selector = '#root';

Terra.viewports('tiny', 'small', 'medium', 'large', 'huge').forEach((viewport) => {
  describe('Detail List', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Displays a default Detail List with a title and list', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list');
      });

      it.validatesElement({ selector });
    });

    describe('Displays a default Detail List with a title and large list', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list');
      });

      it.validatesElement({ selector });
    });
  });
});
