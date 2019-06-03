Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous').forEach((viewport) => {
  describe('Clinical header', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Header with no content', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-header/clinical-header/default-header');
      });

      Terra.it.validatesElement();
    });

    describe('Header with a title only', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-header/clinical-header/title-header');
      });

      Terra.it.validatesElement();
    });

    describe('Header with a long title that truncates', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-header/clinical-header/long-title-header');
      });

      Terra.it.validatesElement();
    });

    describe('Header with content on the left', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-header/clinical-header/left-content-header');
      });

      Terra.it.validatesElement();
    });

    describe('Header with content on the right', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-header/clinical-header/right-content-header');
      });

      Terra.it.validatesElement();
    });

    describe('Header with content on both sides', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-header/clinical-header/left-and-right-content-header');
      });

      Terra.it.validatesElement();
    });

    describe('Header with a long title that truncates with content', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-header/clinical-header/long-title-and-content-header');
      });

      Terra.it.validatesElement();
    });

    describe('Subsection header with content on both sides', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-header/clinical-header/left-and-right-content-subheader');
      });

      Terra.it.validatesElement();
    });

    describe('Header with no title and content on the right', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-header/clinical-header/no-title-right-content-header');
      });

      Terra.it.validatesElement();
    });
  });
});
