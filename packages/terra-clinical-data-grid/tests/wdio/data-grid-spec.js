Terra.describeViewports('DataGrid', ['medium'], () => {
  describe('with pinned columns and overflow columns', () => {
    describe('with initial rendering', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
      });

      Terra.it.validatesElement('#pinned-and-overflow', { selector: '#standard-data-grid' });
    });
  });
});
