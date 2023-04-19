Terra.describeViewports('DataGrid', ['medium', 'huge'], () => {
  describe('with pinned columns and overflow columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
    });

    it('should display default DataGrid', () => {
      Terra.validates.element('default', { selector: '#standard-data-grid' });
    });

    it('should display DataGrid with horizontal overflow', () => {
      $('[data-cell-label="section_0-0-Column-12"]').click();

      Terra.validates.element('horizontal overflow', { selector: '#standard-data-grid' });
    });

    it('should display DataGrid with vertical overflow', () => {
      $('[data-cell-label="section_0-29-Column-12"]').click();

      Terra.validates.element('vertical overflow', { selector: '#standard-data-grid' });
    });
  });

  describe('with fill disabled', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-fill-data-grid');
    });

    it('should display DataGrid with fill disabled', () => {
      Terra.validates.element('fill disabled', { selector: '#no-fill-data-grid' });
    });

    it('should display DataGrid with horizontal overflow', () => {
      $('[data-cell-label="section_0-0-Column-12"]').click();

      Terra.validates.element('filled disabled horizontal overflow', { selector: '#no-fill-data-grid' });
    });

    it('should display DataGrid with vertical overflow', () => {
      $('[data-cell-label="section_0-29-Column-12"]').click();

      Terra.validates.element('filled disabled vertical overflow', { selector: '#no-fill-data-grid' });
    });
  });

  describe('with no pinned columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
    });

    it('should display DataGrid with no pinned columns', () => {
      Terra.validates.element('pinned columns', { selector: '#no-pinned-column-data-grid' });
    });

    it('should display DataGrid with with horizontal overflow', () => {
      $('[data-cell-label="section_0-0-Column-12"]').click();

      Terra.validates.element('pinned columns horizontal overflow', { selector: '#no-pinned-column-data-grid' });
    });

    it('should display DataGrid with with vertical overflow', () => {
      $('[data-cell-label="section_0-29-Column-12"]').click();

      Terra.validates.element('pinned columns vertical overflow', { selector: '#no-pinned-column-data-grid' });
    });
  });

  describe('with no overflow columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-overflow-column-data-grid');
    });

    it('should display DataGrid with no overflow columns', () => {
      Terra.validates.element('no overflow columns', { selector: '#no-overflow-column-data-grid' });
    });

    it('should display DataGrid with vertical overflow', () => {
      $('[data-cell-label="section_0-29-Column-0"]').click();

      Terra.validates.element('no overflow columns vertical overflow', { selector: '#no-overflow-column-data-grid' });
    });
  });

  describe('with tabbing', () => {
    before(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
    });

    it('tabs across selectable headers', () => {
      browser.keys(new Array(4).fill('Tab'));

      Terra.validates.element('forward-headers', { selector: '#selectable-data-grid' });
    });

    it('tabs backwards across selectable headers', () => {
      browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));

      Terra.validates.element('backward-headers', { selector: '#selectable-data-grid' });
    });

    it('tabs across selectable sections and cells', () => {
      browser.keys(new Array(128).fill('Tab'));

      Terra.validates.element('forward-sections', { selector: '#selectable-data-grid' });
    });

    it('tabs backwards selectable sections and cells', () => {
      browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));

      Terra.validates.element('backward-sections', { selector: '#selectable-data-grid' });
    });

    after(() => browser.refresh());
  });

  it('should display DataGrid with cell selections', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
    $('[data-cell-label="section_0-0-Column-0"]').click();

    Terra.validates.element('cell selections', { selector: '#selectable-data-grid' });
  });

  it('should display DataGrid with row selections', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
    $('#selections-example-Pinned-Row-Row-0-Section-section_0 > *:first-child').click();
    $('#root').moveTo({ xoffset: 0, yoffset: 0 });

    Terra.validates.element('row selections', { selector: '#selectable-data-grid' });
  });

  it('should display DataGrid with column header selections', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
    $('#selectable-data-grid [class*="HeaderCell"]:nth-child(2)').click();

    Terra.validates.element('column header selections', { selector: '#selectable-data-grid' });
  });

  it('should display DataGrid with subsection selections', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/subsection-data-grid');
    $('#subsection-data-grid [class*="SectionHeader"]').click();

    Terra.validates.element('subsection selections', { selector: '#subsection-data-grid' });
  });

  it('should display DataGrid with paging', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/paged-content-data-grid');
    $('#paging-example-Pinned-Row-section_1-Row0-Section-section_1').waitForDisplayed();

    Terra.validates.element('paging', { selector: '#paged-data-grid' });
  });

  it('should display DataGrid with custom row/header heights', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/custom-height-data-grid');

    Terra.validates.element('custom row/header heights', { selector: '#custom-height-data-grid' });
  });

  it('should display highlighted column not selectable cells DataGrid', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/highlight-column-not-selectable-data-grid');

    Terra.validates.element('highlighted column not selectable cells', { selector: '#highlight-column-not-selectable-data-grid' });
  });

  it('should display highlighted column with a single row DataGrid', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/highlight-column-single-row-data-grid');

    Terra.validates.element('highlighted column single row', { selector: '#highlight-column-single-row-data-grid' });
  });

  describe('with highlighted column empty sections', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/highlight-column-empty-sections-data-grid');
    });

    it('should display highlighted column with a single row visible and collapsed and empty sections DataGrid', () => {
      Terra.validates.element('highlighted column empty collapsed sections', { selector: '#highlight-column-empty-sections-data-grid' });
    });

    it('should display highlighted column with a decorative row DataGrid', () => {
      $('[data-terra-clinical-data-grid-section-header-id="Section-2"] [class*="SectionHeader"]').click();

      Terra.validates.element('highlighted column decorative row', { selector: '#highlight-column-empty-sections-data-grid' });
    });
  });

  describe('with highlighted column selectable', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/highlight-column-selectable-data-grid');
    });

    it('should display highlighted column selectable cells DataGrid', () => {
      Terra.validates.element('highlighted column selectable cells', { selector: '#highlight-column-selectable-data-grid' });
    });

    it('should display highlighted column selectable cells DataGrid with row hover', () => {
      $('[data-accessibility-id-highlight-column-selections-example="24"]').moveTo();
      Terra.validates.element('highlighted column selectable cells row hover', { selector: '#highlight-column-selectable-data-grid' });
    });

    it('should display highlighted column selectable cells DataGrid with row selection', () => {
      $('[data-accessibility-id-highlight-column-selections-example="24"]').click();
      $('#root').moveTo({ xoffset: 0, yoffset: 0 });
      Terra.validates.element('highlighted column selectable cells row selection', { selector: '#highlight-column-selectable-data-grid' });
    });

    it('should display highlighted column selectable cells DataGrid with cell focus', () => {
      $('[data-accessibility-id-highlight-column-selections-example="26"]').click();
      browser.keys(['Tab']);
      Terra.validates.element('highlighted column selectable cells cell focus', { selector: '#highlight-column-selectable-data-grid' });
    });

    it('should display highlighted column selectable cells DataGrid with cell selection', () => {
      $('[data-accessibility-id-highlight-column-selections-example="27"]').click();

      $('#root').moveTo({ xoffset: 0, yoffset: 0 });
      Terra.validates.element('highlighted column selectable cells cell selection', { selector: '#highlight-column-selectable-data-grid' });
    });
  });

  describe('with two grids on the page', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/multiple-data-grids');
    });

    it('should be able to tab across grids', () => {
      browser.keys(new Array(49).fill('Tab'));

      Terra.validates.element('multiple-grids-tab', { selector: '#multiple-data-grids' });
    });

    it('should be able sort grid data independently', () => {
      browser.keys((new Array(3).fill('Tab')).concat(new Array(2).fill('Space')));

      Terra.validates.element('multiple-grids-sort', { selector: '#multiple-data-grids' });
    });

    it('should be able select grid rows independently', () => {
      browser.keys((new Array(6).fill('Tab'))
        .concat(['Space'])
        .concat(new Array(49).fill('Tab'))
        .concat(['Space']));

      Terra.validates.element('multiple-grids-select-rows', { selector: '#multiple-data-grids' });
    });

    it('should be able select grid cells independently', () => {
      browser.keys((new Array(7).fill('Tab'))
        .concat(['Space'])
        .concat(new Array(50).fill('Tab'))
        .concat(['Space']));

      Terra.validates.element('multiple-grids-select-cells', { selector: '#multiple-data-grids' });
    });

    it('should be able close grid sections independently', () => {
      browser.keys((new Array(5).fill('Tab'))
        .concat(['Space'])
        .concat(new Array(42).fill('Tab'))
        .concat(['Space']));

      Terra.validates.element('multiple-grids-close-sections', { selector: '#multiple-data-grids' });
    });

    after(() => browser.refresh());
  });
});
