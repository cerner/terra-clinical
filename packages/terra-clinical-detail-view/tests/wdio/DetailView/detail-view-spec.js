const selector = '#root';

Terra.viewports('tiny', 'small', 'medium', 'large', 'huge').forEach((viewport) => {
  describe('Detail View', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Displays a divided Detail View with provided components', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided');
      });

      Terra.it.validatesElement();({ selector });
    });

    describe('Displays a Detail View that is not divided with provided components', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-no-divider');
      });

      Terra.it.validatesElement();({ selector });
    });

    describe('Displays a Detail View with provided components and when title size is smaller', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided-smaller-titles');
      });

      Terra.it.validatesElement();({ selector });
    });

    describe('Displays a Detail View with overflowed title text', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-overflow-text'));

      Terra.it.validatesElement();({ selector });
    });
  });
});
