// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

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
  '--terra-clinical-data-grid-scrollbar-color': 'purple',
  '--terra-clinical-data-grid-scrollbar-border-radius': '0px',
  '--terra-clinical-data-grid-scrollbar-active-color': 'darkgreen',
  '--terra-clinical-data-grid-section-header-background-color': 'yellow',
  '--terra-clinical-data-grid-section-header-border-bottom': 'blueviolet',
  '--terra-clinical-data-grid-section-header-hover-background-color': 'green',
};

const viewports = ['medium', 'huge'];

const testSetup = {
  viewports,
  themedProperties,
  parentName: 'with initial rendering',
  examples: {
    'Standard Data Grid': {
      selector: '#standard-data-grid',
      testName: '#pinned-and-overflow',
      themedTestName: 'themed with pinned columns and overflow columns',
    },
    'No Pinned Column Data Grid': {
      selector: '#no-pinned-column-data-grid',
      testName: '#no-pinned',
      themedTestName: 'themed with no pinned columns',
    },
    'No Overflow Column Data Grid': {
      selector: '#no-overflow-column-data-grid',
      testName: '#no-overflow',
      themedTestName: 'themed with no oveflow columns',
    },
    'Custom Height Data Grid': {
      selector: '#custom-height-data-grid',
      themedTestName: 'themed',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-data-grid',
  testSetup,
});

viewports.forEach((viewport) => {
  describe(`DataGrid - ${viewport}`, () => {
    before(() => browser.setViewportSize(Terra.viewports(viewport)[0]));

    describe('with pinned columns and overflow columns', () => {
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

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
      Terra.should.beAccessible();
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

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
      Terra.should.beAccessible();
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

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#selectable-data-grid',
        properties: {
          '--terra-clinical-data-grid-row-hover-background-color': 'blue',
        },
      });
    });

    describe('with column header selections', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
        browser.click('#selectable-data-grid [class*="HeaderCell"]:nth-child(2)');
      });

      Terra.should.matchScreenshot({ selector: '#selectable-data-grid' });
      Terra.should.beAccessible();
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

      Terra.should.matchScreenshot({ selector: '#subsection-data-grid' });
      Terra.should.beAccessible();
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

      Terra.should.matchScreenshot({ selector: '#subsection-data-grid' });
      Terra.should.beAccessible();
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

      Terra.should.matchScreenshot({ selector: '#paged-data-grid' });
      Terra.should.beAccessible();
    });
  });
});
