/* global browser, before, Terra */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('Clinical Application', () => {
  describe('Renders the Application with provided AppDelegate', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-application/clinical-application/default-application');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Renders the Application without provided AppDelegate', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-application/clinical-application/no-app-delegate-application');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });
});
