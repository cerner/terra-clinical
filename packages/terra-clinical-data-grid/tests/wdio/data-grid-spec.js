Terra.describeViewports('DataGrid', ['medium', 'huge'], () => {
  describe('with pinned columns and overflow columns', () => {
    describe('with initial rendering', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
      });

      Terra.it.validatesElement('#pinned-and-overflow', { selector: '#standard-data-grid' });
    });

    describe('with horizontal overflow', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
        browser.click('[data-cell-label="section_0-0-Column-12"]');
      });

      Terra.it.validatesElement('#pinned-and-overflow', { selector: '#standard-data-grid' });

      after(() => browser.moveToObject('#root', 0, 0));
    });

    describe('with vertical overflow', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
        browser.click('[data-cell-label="section_0-29-Column-12"]');
      });

      Terra.it.validatesElement('#pinned-and-overflow', { selector: '#standard-data-grid' });
      after(() => browser.moveToObject('#root', 0, 0));
    });
  });

  describe('with fill disabled', () => {
    describe('with initial rendering', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-fill-data-grid');
      });

      Terra.it.validatesElement('#no-fill', { selector: '#no-fill-data-grid' });
    });

    describe('with horizontal overflow', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-fill-data-grid');
        browser.click('[data-cell-label="section_0-0-Column-12"]');
      });

      Terra.it.validatesElement('#no-fill', { selector: '#no-fill-data-grid' });

      after(() => browser.moveToObject('#root', 0, 0));
    });

    describe('with vertical overflow', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-fill-data-grid');
        browser.click('[data-cell-label="section_0-29-Column-12"]');
      });

      Terra.it.validatesElement('#no-fill', { selector: '#no-fill-data-grid' });

      after(() => browser.moveToObject('#root', 0, 0));
    });
  });

  describe('with no pinned columns', () => {
    describe('with initial rendering', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
      });

      Terra.it.validatesElement('#no-pinned', { selector: '#no-pinned-column-data-grid' });
    });

    describe('with horizontal overflow', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
        browser.click('[data-cell-label="section_0-0-Column-12"]');
      });

      Terra.it.validatesElement('#no-pinned', { selector: '#no-pinned-column-data-grid' });

      after(() => browser.moveToObject('#root', 0, 0));
    });

    describe('with vertical overflow', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
        browser.click('[data-cell-label="section_0-29-Column-12"]');
      });

      Terra.it.validatesElement('#no-pinned', { selector: '#no-pinned-column-data-grid' });

      after(() => browser.moveToObject('#root', 0, 0));
    });
  });

  describe('with no oveflow columns', () => {
    describe('with initial rendering', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-overflow-column-data-grid');
      });

      Terra.it.validatesElement('#no-overflow', { selector: '#no-overflow-column-data-grid' });
    });

    describe('with vertical overflow', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-overflow-column-data-grid');
        browser.click('[data-cell-label="section_0-29-Column-0"]');
      });

      Terra.it.validatesElement('#no-overflow', { selector: '#no-overflow-column-data-grid' });

      after(() => browser.moveToObject('#root', 0, 0));
    });
  });

  describe('with tabbing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
    });

    it('tabs across selectable headers', () => {
      browser.keys(new Array(4).fill('Tab'));
    });
    Terra.it.validatesElement('#forward-headers', { selector: '#selectable-data-grid' });

    it('tabs backwards across selectable headers', () => {
      browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));
    });
    Terra.it.validatesElement('#backward-headers', { selector: '#selectable-data-grid' });

    it('tabs across selectable sections and cells', () => {
      browser.keys(new Array(128).fill('Tab'));
    });
    Terra.it.validatesElement('#forward-sections', { selector: '#selectable-data-grid' });

    it('tabs backwards selectable sections and cells', () => {
      browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));
    });
    Terra.it.validatesElement('#backward-sections', { selector: '#selectable-data-grid' });

    after(() => browser.refresh());
  });

  describe('with cell selection hover', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
      browser.moveToObject('[data-accessibility-id="8"]');
    });

    Terra.it.validatesElement({ selector: '#selectable-data-grid' });
  });

  describe('with cell selections', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
      browser.click('[data-cell-label="section_0-0-Column-0"]');
    });

    Terra.it.validatesElement({ selector: '#selectable-data-grid' });

    after(() => browser.refresh());
  });

  describe('with row selection hover', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
      browser.moveToObject('[data-accessibility-id="7"]');
    });

    Terra.it.validatesElement({ selector: '#selectable-data-grid' });
  });

  describe('with row selections', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
      browser.click('#selections-example-Pinned-Row-Row-0-Section-section_0 > *:first-child');
      browser.moveTo(0, 0);
    });

    Terra.it.validatesElement({ selector: '#selectable-data-grid' });
  });

  describe('with selected row hover', () => {
    // Remove when https://github.com/cerner/terra-clinical/issues/505 is resolved
    const axeRules = { 'color-contrast': { enabled: false } };
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
      browser.click('[data-accessibility-id="7"]');
      browser.moveToObject('[data-accessibility-id="8"]');
      browser.moveToObject('[data-accessibility-id="7"]');
    });

    Terra.it.validatesElement({ selector: '#selectable-data-grid', axeRules });

    after(() => browser.refresh());
  });

  describe('with column header selections', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
      browser.click('#selectable-data-grid [class*="HeaderCell"]:nth-child(2)');
    });

    Terra.it.validatesElement({ selector: '#selectable-data-grid' });

    after(() => browser.moveToObject('#root', 0, 0));
  });

  describe('with subsection selection hover', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/subsection-data-grid');
      browser.moveToObject('[data-accessibility-id="0"]');
    });

    Terra.it.validatesElement({ selector: '#subsection-data-grid' });

    after(() => browser.moveToObject('#root', 0, 0));
  });

  describe('with subsection selections', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/subsection-data-grid');
      browser.click('#subsection-data-grid [class*="SectionHeader"]');
    });

    Terra.it.validatesElement({ selector: '#subsection-data-grid' });

    after(() => browser.moveToObject('#root', 0, 0));
  });

  describe('with paging', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/paged-content-data-grid');
      browser.waitForVisible('#paging-example-Pinned-Row-section_1-Row0-Section-section_1');
    });

    Terra.it.validatesElement({ selector: '#paged-data-grid' });
  });

  describe('with custom row/header heights', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/custom-height-data-grid');
    });

    Terra.it.validatesElement({ selector: '#custom-height-data-grid' });
  });
});
