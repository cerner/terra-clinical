const themedProperties = {
  '--terra-clinical-data-grid-border': '5px dashed red',
  '--terra-clinical-data-grid-column-header-background-color': 'blue',
  '--terra-clinical-data-grid-column-header-border-bottom': 'yellow',
  '--terra-clinical-data-grid-background-color': 'purple',
  '--terra-clinical-data-grid-pinned-column-box-shadow': '0 0 12px 0 red',
  '--terra-clinical-data-grid-section-header-height': '4rem',
  '--terra-clinical-data-grid-scrollbar-background-color': 'green',
  '--terra-clinical-data-grid-cell-border-right': '2px solid black',
  '--terra-clinical-data-grid-cell-hover-background-color': 'lightblue',
  '--terra-clinical-data-grid-cell-selected-background-color': 'brown',
  '--terra-clinical-data-grid-cell-selected-focus-background-color': 'brown',
  '--terra-clinical-data-grid-cell-selected-hover-background-color': 'darkblue',
  '--terra-clinical-data-grid-header-cell-border-right': '3px solid black',
  '--terra-clinical-data-grid-column-header-text-color': 'green',
  '--terra-clinical-data-grid-resize-handle-width': '15px',
  '--terra-clinical-data-grid-resize-handle-hover-background-color': 'blue',
  '--terra-clinical-data-grid-resize-handle-active-background-color': 'red',
  '--terra-clinical-data-grid-row-background-color': 'lightgreen',
  '--terra-clinical-data-grid-row-striped-background-color': 'lightpink',
  '--terra-clinical-data-grid-row-hover-background-color': 'blue',
  '--terra-clinical-data-grid-row-selected-background-color': 'darksalmon',
  '--terra-clinical-data-grid-row-selected-box-shadow': 'inset 0 1px 0 0 yellow, inset 0 -1px 0 0 yellow',
  '--terra-clinical-data-grid-row-selected-hover-background-color': 'salmon',
  '--terra-clinical-data-grid-scrollbar-height': '20px',
  '--terra-clinical-data-grid-scrollbar-hover-height': '30px',
  '--terra-clinical-data-grid-scrollbar-handle-background-color': 'purple',
  '--terra-clinical-data-grid-scrollbar-handle-border-radius': '0px',
  '--terra-clinical-data-grid-scrollbar-handle-active-background-color': 'darkgreen',
  '--terra-clinical-data-grid-section-header-background-color': 'yellow',
  '--terra-clinical-data-grid-section-header-border-bottom': 'blueviolet',
  '--terra-clinical-data-grid-section-header-hover-background-color': 'green',
  '--terra-clinical-data-grid-scrollbar-pinned-column-box-shadow': '0 0 12px 0 blue, inset -1px 0 0 0 blue',
  '--terra-clinical-data-grid-row-selection-icon-height': '2rem',
  '--terra-clinical-data-grid-row-selection-icon-width': '2rem',
};

['medium', 'huge'].forEach((viewport) => {
  describe(`DataGrid - ${viewport}`, () => {
    before(() => browser.setViewportSize(Terra.viewports(viewport)[0]));

    describe('with pinned columns and overflow columns', () => {
      describe('with initial rendering', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
        });

        Terra.should.validateElement('#pinned-and-overflow', { selector: '#standard-data-grid' });
        Terra.should.themeCombinationOfCustomProperties({
          testName: 'themed with pinned columns and overflow columns',
          selector: '#standard-data-grid',
          properties: themedProperties,
        });
      });

      describe('with horizontal overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
          browser.click('[data-cell-label="section_0-0-Column-12"]');
        });

        Terra.should.validateElement('#pinned-and-overflow', { selector: '#standard-data-grid' });
      });

      describe('with vertical overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
          browser.click('[data-cell-label="section_0-29-Column-12"]');
        });

        Terra.should.validateElement('#pinned-and-overflow', { selector: '#standard-data-grid' });
      });
    });

    describe('with fill disabled', () => {
      describe('with initial rendering', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-fill-data-grid');
        });

        Terra.should.validateElement('#no-fill', { selector: '#no-fill-data-grid' });
        Terra.should.themeCombinationOfCustomProperties({
          testName: 'themed with no fill',
          selector: '#no-fill-data-grid',
          properties: themedProperties,
        });
      });

      describe('with horizontal overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-fill-data-grid');
          browser.click('[data-cell-label="section_0-0-Column-12"]');
        });

        Terra.should.validateElement('#no-fill', { selector: '#no-fill-data-grid' });
      });

      describe('with vertical overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-fill-data-grid');
          browser.click('[data-cell-label="section_0-29-Column-12"]');
        });

        Terra.should.validateElement('#no-fill', { selector: '#no-fill-data-grid' });
      });
    });

    describe('with no pinned columns', () => {
      describe('with initial rendering', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
        });

        Terra.should.validateElement('#no-pinned', { selector: '#no-pinned-column-data-grid' });
        Terra.should.themeCombinationOfCustomProperties({
          testName: 'themed with no pinned columns',
          selector: '#no-pinned-column-data-grid',
          properties: themedProperties,
        });
      });

      describe('with horizontal overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
          browser.click('[data-cell-label="section_0-0-Column-12"]');
        });

        Terra.should.validateElement('#no-pinned', { selector: '#no-pinned-column-data-grid' });
      });

      describe('with vertical overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
          browser.click('[data-cell-label="section_0-29-Column-12"]');
        });

        Terra.should.validateElement('#no-pinned', { selector: '#no-pinned-column-data-grid' });
      });
    });

    describe('with no oveflow columns', () => {
      describe('with initial rendering', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-overflow-column-data-grid');
        });

        Terra.should.validateElement('#no-overflow', { selector: '#no-overflow-column-data-grid' });
        Terra.should.themeCombinationOfCustomProperties({
          testName: 'themed with no oveflow columns',
          selector: '#no-overflow-column-data-grid',
          properties: themedProperties,
        });
      });

      describe('with vertical overflow', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-overflow-column-data-grid');
          browser.click('[data-cell-label="section_0-29-Column-0"]');
        });

        Terra.should.validateElement('#no-overflow', { selector: '#no-overflow-column-data-grid' });
      });
    });

    describe('with tabbing', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
      });

      it('tabs across selectable headers', () => {
        browser.keys(new Array(4).fill('Tab'));
      });
      Terra.should.validateElement('#forward-headers', { selector: '#selectable-data-grid' });

      it('tabs backwards across selectable headers', () => {
        browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));
      });
      Terra.should.validateElement('#backward-headers', { selector: '#selectable-data-grid' });

      it('tabs across selectable sections and cells', () => {
        browser.keys(new Array(128).fill('Tab'));
      });
      Terra.should.validateElement('#forward-sections', { selector: '#selectable-data-grid' });

      it('tabs backwards selectable sections and cells', () => {
        browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));
      });
      Terra.should.validateElement('#backward-sections', { selector: '#selectable-data-grid' });
    });

    describe('with cell selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('[data-cell-label="section_0-0-Column-0"]');
      });

      Terra.should.validateElement({ selector: '#selectable-data-grid' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#selectable-data-grid',
        properties: themedProperties,
      });
    });

    describe('with cell selection hover', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.moveToObject('[data-accessibility-id="8"]');
      });

      Terra.should.validateElement({ selector: '#selectable-data-grid' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#selectable-data-grid',
        properties: {
          '--terra-clinical-data-grid-cell-hover-background-color': 'blue',
        },
      });
    });

    describe('with row selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('#selections-example-Pinned-Row-Row-0-Section-section_0 > *:first-child');
      });

      Terra.should.validateElement({ selector: '#selectable-data-grid' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#selectable-data-grid',
        properties: themedProperties,
      });
    });

    describe('with row selection hover', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.moveToObject('[data-accessibility-id="7"]');
      });

      Terra.should.validateElement({ selector: '#selectable-data-grid' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#selectable-data-grid',
        properties: {
          '--terra-clinical-data-grid-row-hover-background-color': 'blue',
        },
      });
    });

    describe('with selected row hover', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('[data-accessibility-id="7"]');
        browser.moveToObject('[data-accessibility-id="8"]');
        browser.moveToObject('[data-accessibility-id="7"]');
      });

      Terra.should.validateElement({ selector: '#selectable-data-grid' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#selectable-data-grid',
        properties: {
          '--terra-clinical-data-grid-row-selected-hover-background-color': 'salmon',
        },
      });
    });

    describe('with column header selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('#selectable-data-grid [class*="HeaderCell"]:nth-child(2)');
      });

      Terra.should.validateElement({ selector: '#selectable-data-grid' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#selectable-data-grid',
        properties: themedProperties,
      });
    });

    describe('with subsection selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/subsection-data-grid');
        browser.click('#subsection-data-grid [class*="SectionHeader"]');
      });

      Terra.should.validateElement({ selector: '#subsection-data-grid' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#subsection-data-grid',
        properties: themedProperties,
      });
    });

    describe('with subsection selection hover', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/subsection-data-grid');
        browser.moveToObject('[data-accessibility-id="0"]');
      });

      Terra.should.validateElement({ selector: '#subsection-data-grid' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#subsection-data-grid',
        properties: {
          '--terra-clinical-data-grid-section-header-hover-background-color': 'green',
        },
      });
    });

    describe('with paging', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/paged-content-data-grid');
        browser.waitForVisible('#paging-example-Pinned-Row-section_1-Row0-Section-section_1');
      });

      Terra.should.validateElement({ selector: '#paged-data-grid' });
    });

    describe('with custom row/header heights', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/custom-height-data-grid');
      });

      Terra.should.validateElement({ selector: '#custom-height-data-grid' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#custom-height-data-grid',
        properties: themedProperties,
      });
    });
  });
});
