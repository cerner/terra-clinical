/* global browser, Terra, before */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge');
const selector = '#root';

describe('Detail View', () => {
  describe('Displays a divided Detail View with provided components', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-detail-view/detail-view/detail-view-divided');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Displays a Detail View that is not divided with provided components', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-detail-view/detail-view/detail-view-no-divider');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
