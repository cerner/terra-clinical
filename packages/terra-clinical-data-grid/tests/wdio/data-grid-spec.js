
['medium', 'large', 'huge', 'enormous'].forEach((viewport) => {
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
      });

      describe('with vertical overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
          browser.click('[data-cell-label="section_0-29-Column-12"]');
        });

        Terra.should.matchScreenshot('#pinned-and-overflow', { selector: '#standard-data-grid' });
      });
    });

    describe('with no pinned columns', () => {
      describe('with initial rendering', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
        });

        Terra.should.matchScreenshot('#no-pinned', { selector: '#no-pinned-column-data-grid' });
      });

      describe('with horizontal overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
          browser.click('[data-cell-label="section_0-0-Column-12"]');
        });

        Terra.should.matchScreenshot('#no-pinned', { selector: '#no-pinned-column-data-grid' });
      });

      describe('with vertical overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
          browser.click('[data-cell-label="section_0-29-Column-12"]');
        });

        Terra.should.matchScreenshot('#no-pinned', { selector: '#no-pinned-column-data-grid' });
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
    });

    describe('with cell selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('[data-cell-label="section_0-0-Column-0"]');
      });

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
    });

    describe('with row selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('#selections-example-Pinned-Row-Row-0-Section-section_0 > *:first-child');
      });

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
    });

    describe('with column header selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('#selectable-data-grid [class*="HeaderCell"]:nth-child(2)');
      });

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
    });

    describe('with subsection selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/subsection-data-grid');
        browser.click('#subsection-data-grid [class*="SectionHeader"]');
      });

      Terra.should.matchScreenshot({ selector: '#subsection-data-grid' });
    });
  });
});
