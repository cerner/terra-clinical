Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous').forEach((viewport) => {
  describe('Clinical Application', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Renders the Application with provided AppDelegate', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-application/clinical-application/default-application');
      });

      Terra.should.validateElement();
    });

    describe('Renders the Application without provided AppDelegate', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-application/clinical-application/no-app-delegate-application');
      });

      Terra.should.validateElement();
    });
  });
});
