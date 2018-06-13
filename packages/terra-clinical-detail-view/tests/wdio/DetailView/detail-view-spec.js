/* global browser, Terra, before */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge');
const selector = '#root';

describe('Detail View', () => {
  describe('Displays a divided Detail View with provided components', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided');
    });

    Terra.should.matchScreenshot({ viewports, selector });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector,
      properties: {
        '--terra-detail-view-subtitle-color': 'purple',
        '--terra-detail-view-accessory-color': 'red',
        '--terra-detail-view-divider-border-color': 'yellow',
        '--terra-detail-view-footer-text-color': 'green',
      },
    });
  });

  describe('Displays a Detail View that is not divided with provided components', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-no-divider');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Displays a Detail View with provided components and when title size is smaller', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided-smaller-titles');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });
});
