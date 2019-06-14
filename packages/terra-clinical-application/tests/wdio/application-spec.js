Terra.describeViewports('Clinical Application', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('Renders the Application with provided AppDelegate', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-application/clinical-application/default-application');
    });

    it('has the app delegate', () => {
      const pageMessage = browser.element('#test-ContainerComponent').getText();
      expect(pageMessage).to.include('is present');
    });
  });

  describe('Renders the Application without provided AppDelegate', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-application/clinical-application/no-app-delegate-application');
    });

    it('does not have the app delegate', () => {
      const pageMessage = browser.getText('#test-ContainerComponent');
      expect(pageMessage).to.include('is not present');
    });
  });
});
