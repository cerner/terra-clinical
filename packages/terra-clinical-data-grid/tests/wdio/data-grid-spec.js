
['medium', 'huge'].forEach((viewport) => {
  describe(`DataGrid - ${viewport}`, () => {
    before(() => browser.setViewportSize(Terra.viewports(viewport)[0]));

    describe('with pinned columns and overflow columns', () => {
      describe('with initial rendering', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
        });

        Terra.should.matchScreenshot('#pinned-and-overflow', { selector: '#standard-data-grid' });
        Terra.should.beAccessible();
      });

      describe('with horizontal overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
          browser.click('[data-cell-label="section_0-0-Column-12"]');
        });

        Terra.should.matchScreenshot('#pinned-and-overflow', { selector: '#standard-data-grid' });
        Terra.should.beAccessible();
      });

      describe('with vertical overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
          browser.click('[data-cell-label="section_0-29-Column-12"]');
        });

        Terra.should.matchScreenshot('#pinned-and-overflow', { selector: '#standard-data-grid' });
        Terra.should.beAccessible();
      });
    });

    describe('with no pinned columns', () => {
      describe('with initial rendering', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
        });

        Terra.should.matchScreenshot('#no-pinned', { selector: '#no-pinned-column-data-grid' });
        Terra.should.beAccessible();
      });

      describe('with horizontal overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
          browser.click('[data-cell-label="section_0-0-Column-12"]');
        });

        Terra.should.matchScreenshot('#no-pinned', { selector: '#no-pinned-column-data-grid' });
        Terra.should.beAccessible();
      });

      describe('with vertical overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
          browser.click('[data-cell-label="section_0-29-Column-12"]');
        });

        Terra.should.matchScreenshot('#no-pinned', { selector: '#no-pinned-column-data-grid' });
        Terra.should.beAccessible();
      });
    });

    describe('with no oveflow columns', () => {
      describe('with initial rendering', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-overflow-column-data-grid');
        });

        Terra.should.matchScreenshot('#no-overflow', { selector: '#no-overflow-column-data-grid' });
        Terra.should.beAccessible();
      });

      describe('with vertical overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-overflow-column-data-grid');
          browser.click('[data-cell-label="section_0-29-Column-0"]');
        });

        Terra.should.matchScreenshot('#no-overflow', { selector: '#no-overflow-column-data-grid' });
        Terra.should.beAccessible();
      });
    });

    describe('with tabbing', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
      });

      it('tabs across selectable headers', () => {
        browser.keys(new Array(4).fill('Tab'));
      });
      Terra.should.matchScreenshot('#forward-headers', { selector: '#selectable-data-grid' });

      it('tabs backwards across selectable headers', () => {
        browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));
      });
      Terra.should.matchScreenshot('#backward-headers', { selector: '#selectable-data-grid' });

      it('tabs across selectable sections and cells', () => {
        browser.keys(new Array(128).fill('Tab'));
      });
      Terra.should.matchScreenshot('#forward-sections', { selector: '#selectable-data-grid' });

      it('tabs backwards selectable sections and cells', () => {
        browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));
      });
      Terra.should.matchScreenshot('#backward-sections', { selector: '#selectable-data-grid' });

      Terra.should.beAccessible();
    });

    describe('with cell selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('[data-cell-label="section_0-0-Column-0"]');
      });

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
      Terra.should.beAccessible();
    });

    describe('with row selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('#selections-example-Pinned-Row-Row-0-Section-section_0 > *:first-child');
      });

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
      Terra.should.beAccessible();
    });

    describe('with column header selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('#selectable-data-grid [class*="HeaderCell"]:nth-child(2)');
      });

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
      Terra.should.beAccessible();
    });

    describe('with subsection selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/subsection-data-grid');
        browser.click('#subsection-data-grid [class*="SectionHeader"]');
      });

      Terra.should.matchScreenshot({ selector: '#subsection-data-grid' });
      Terra.should.beAccessible();
    });

    describe('with paging', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/paged-content-data-grid');
        browser.waitForVisible('#paging-example-Pinned-Row-section_1-Row0-Section-section_1');
      });

      Terra.should.matchScreenshot({ selector: '#paged-data-grid' });
      Terra.should.beAccessible();
    });

    describe('with custom row/header heights', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/custom-height-data-grid');
      });

      Terra.should.matchScreenshot({ selector: '#custom-height-data-grid' });
      Terra.should.beAccessible();
    });
  });
});
