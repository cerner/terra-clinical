Terra.describeViewports('Clinical header', ['medium'], () => {
  describe('Header with no content', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-header/clinical-header/default-header');
    });

    Terra.it.validatesElement();
  });
});
