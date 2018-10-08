const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('Clinical header', () => {
  describe('Header with no content', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/default-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Header with a title only', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/title-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Header with a long title that truncates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/long-title-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Header with content on the left', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/left-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Header with content on the right', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/right-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Header with content on both sides', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/left-and-right-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Header with a long title that truncates with content', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/long-title-and-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Subsection header with content on both sides', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/left-and-right-content-subheader');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Header with no title and content on the right', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/no-title-right-content-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });
});
