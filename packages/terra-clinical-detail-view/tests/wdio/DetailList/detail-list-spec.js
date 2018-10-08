const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge');
const selector = '#root';

describe('Detail List', () => {
  describe('Displays a default Detail List with a title and list', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list');
    });

    Terra.should.matchScreenshot({ viewports, selector });
    Terra.should.beAccessible();
  });

  describe('Displays a default Detail List with a title and large list', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list');
    });

    Terra.should.matchScreenshot({ viewports, selector });
    Terra.should.beAccessible();
  });
});
