import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import DataGrid from '../../src/DataGrid';
import dataGridUtils from '../../src/utils/dataGridUtils';
import messages from '../../translations/en-US.json';

const testColumns = {
  'Column-0': {
    id: 'Column-0',
    width: 200,
    text: 'Column 0',
  },
  'Column-1': {
    id: 'Column-1',
    width: 200,
    text: 'Column 1',
  },
  'Column-2': {
    id: 'Column-2',
    width: 200,
    text: 'Column 2',
  },
  'Column-3': {
    id: 'Column-3',
    width: 200,
    text: 'Column 3',
  },
};

const testSections = [{
  id: 'section-0',
  rows: [{
    id: 'row-0',
    ariaLabel: 'Row 0',
    cells: [{
      columnId: 'Column-0',
      component: <div>0</div>,
    }, {
      columnId: 'Column-1',
      component: <div>1</div>,
    }, {
      columnId: 'Column-2',
      component: <div>2</div>,
    }, {
      columnId: 'Column-3',
      component: <div>3</div>,
    }],
  }, {
    id: 'row-1',
    ariaLabel: 'Row 1',
    height: '8rem',
    cells: [{
      columnId: 'Column-0',
      component: <div>0</div>,
    }, {
      columnId: 'Column-1',
      component: <div>1</div>,
    }, {
      columnId: 'Column-2',
      component: <div>2</div>,
    }, {
      columnId: 'Column-3',
      component: <div>3</div>,
    }],
  }],
}];

const mockIntl = {
  formatDate: () => {},
  formatTime: () => {},
  formatRelative: () => {},
  formatNumber: () => {},
  formatPlural: () => {},
  formatMessage: ({ id }, values) => `${messages[id]}-${JSON.stringify(values)}`,
  formatHTMLMessage: () => {},
  now: () => {},
};

describe('DataGrid Snapshots', () => {
  it('should render a DataGrid with missing optional props', () => {
    const dataGrid = shallow(<DataGrid.WrappedComponent id="test" intl={mockIntl} />);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with only overflow columns', () => {
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        overflowColumns={[testColumns['Column-0'], testColumns['Column-1'], testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        fill
        intl={mockIntl}
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with pinned and overflow columns', () => {
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        pinnedColumns={[testColumns['Column-0'], testColumns['Column-1']]}
        overflowColumns={[testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        fill
        intl={mockIntl}
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with custom row and header heights', () => {
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        overflowColumns={[testColumns['Column-0'], testColumns['Column-1'], testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        rowHeight="5rem"
        headerHeight="10rem"
        fill
        intl={mockIntl}
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with selectable rows, columns, and cells', () => {
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        pinnedColumns={[{
          id: 'Column-0',
          width: 200,
          text: 'Column 0',
          isSelectable: true,
          isResizable: true,
          sortIndicator: 'ascending',
        }]}
        overflowColumns={[{
          id: 'Column-1',
          width: 300,
          text: 'Column 1',
          isSelectable: true,
          sortIndicator: 'descending',
        }]}
        sections={[{
          id: 'section-0',
          isCollapsible: true,
          isCollapsed: false,
          text: 'Section 0',
          startAccessory: <div>Start Accessory</div>,
          endAccessory: <div>End Accessory</div>,
          rows: [{
            id: 'row-0',
            isSelectable: true,
            isSelected: true,
            ariaLabel: 'Row 0',
            cells: [{
              columnId: 'Column-0',
              isSelectable: true,
              isSelected: true,
              component: <div>0</div>,
            }, {
              columnId: 'Column-1',
              isSelectable: true,
              component: <div>1</div>,
            }],
          }],
        }]}
        hasSelectableRows
        onColumnSelect={() => {}}
        onCellSelect={() => {}}
        onRowSelect={() => {}}
        fill
        intl={mockIntl}
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with custom header cells', () => {
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        pinnedColumns={[{
          id: 'Column-0',
          width: 200,
          text: 'Column 0',
          sortIndicator: 'ascending',
          component: <div>Custom Header 0</div>,
        }]}
        overflowColumns={[{
          id: 'Column-1',
          width: 300,
          text: 'Column 1',
          sortIndicator: 'descending',
          component: <div>Custom Header 1</div>,
        }]}
        sections={[{
          id: 'section-0',
          isCollapsible: true,
          isCollapsed: false,
          text: 'Section 0',
          startAccessory: <div>Start Accessory</div>,
          endAccessory: <div>End Accessory</div>,
          rows: [{
            id: 'row-0',
            cells: [{
              columnId: 'Column-0',
              component: <div>0</div>,
            }, {
              columnId: 'Column-1',
              component: <div>1</div>,
            }],
          }],
        }]}
        fill
        intl={mockIntl}
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with custom section header', () => {
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        pinnedColumns={[{
          id: 'Column-0',
          width: 200,
          text: 'Column 0',
          sortIndicator: 'ascending',
        }]}
        overflowColumns={[{
          id: 'Column-1',
          width: 300,
          text: 'Column 1',
          sortIndicator: 'descending',
        }]}
        sections={[{
          id: 'section-0',
          isCollapsible: true,
          isCollapsed: false,
          text: 'Section 0',
          startAccessory: <div>Start Accessory</div>,
          endAccessory: <div>End Accessory</div>,
          component: <div>Custom Section Header</div>,
          rows: [{
            id: 'row-0',
            cells: [{
              columnId: 'Column-0',
              component: <div>0</div>,
            }, {
              columnId: 'Column-1',
              component: <div>1</div>,
            }],
          }],
        }]}
        fill
        intl={mockIntl}
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with a highlighted column', () => {
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        columnHighlightId="Column-2"
        overflowColumns={[testColumns['Column-0'], testColumns['Column-1'], testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        fill
        intl={mockIntl}
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with the fill prop missing', () => {
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        pinnedColumns={[testColumns['Column-0'], testColumns['Column-1']]}
        overflowColumns={[testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        intl={mockIntl}
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should pass in refCallback as the ref prop of the vertical overflow container element', () => {
    const refCallback = jest.fn();
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        pinnedColumns={[testColumns['Column-0'], testColumns['Column-1']]}
        overflowColumns={[testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        intl={mockIntl}
        verticalOverflowContainerRefCallback={refCallback}
      />
    );

    mountWithIntl(dataGridComp);
    expect(refCallback).toBeCalled();
  });

  it('should pass in refCallback as the ref prop of the horizontal overflow container element', () => {
    const refCallback = jest.fn();
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        pinnedColumns={[testColumns['Column-0'], testColumns['Column-1']]}
        overflowColumns={[testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        intl={mockIntl}
        horizontalOverflowContainerRefCallback={refCallback}
      />
    );

    mountWithIntl(dataGridComp);
    expect(refCallback).toBeCalled();
  });

  it('should render a DataGrid with label and description ref props that are strings', () => {
    const dataGridComp = (
      <DataGrid.WrappedComponent
        id="test"
        pinnedColumns={[testColumns['Column-0'], testColumns['Column-1']]}
        overflowColumns={[testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        intl={mockIntl}
        fill
        labelRef="label"
        descriptionRef="description"
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with label and description ref props that are refs', () => {
    const setLabelRef = (node) => {
      this.labelNode = node;
    };

    const getLabelRef = () => this.labelNode;

    const setDescriptionRef = (node) => {
      this.descriptionNode = node;
    };

    const getDescriptionRef = () => this.descriptionNode;

    const dataGridComp = (
      <div>
        <span ref={setLabelRef}>My Label</span>
        <span ref={setDescriptionRef}>My Description</span>
        <DataGrid.WrappedComponent
          id="test"
          pinnedColumns={[testColumns['Column-0'], testColumns['Column-1']]}
          overflowColumns={[testColumns['Column-2'], testColumns['Column-3']]}
          sections={testSections}
          intl={mockIntl}
          fill
          labelRef={getLabelRef}
          descriptionRef={getDescriptionRef}
        />
      </div>
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });
});

describe('getDerivedStateFromProps', () => {
  let getPinnedColumnsRef;
  let getOverflowColumnsRef;
  let getTotalColumnWidthRef;

  beforeEach(() => {
    getPinnedColumnsRef = dataGridUtils.getPinnedColumns;
    getOverflowColumnsRef = dataGridUtils.getOverflowColumns;
    getTotalColumnWidthRef = dataGridUtils.getTotalColumnWidth;
  });

  afterEach(() => {
    dataGridUtils.getPinnedColumns = getPinnedColumnsRef;
    dataGridUtils.getOverflowColumns = getOverflowColumnsRef;
    dataGridUtils.getTotalColumnWidth = getTotalColumnWidthRef;
  });

  it('should return the calculated pinned/overflow column widths', () => {
    const pinnedColumns = {};
    const overflowColumns = {};

    dataGridUtils.getPinnedColumns = jest.fn().mockReturnValue(pinnedColumns);
    dataGridUtils.getOverflowColumns = jest.fn().mockReturnValue(overflowColumns);
    dataGridUtils.getTotalColumnWidth = jest.fn().mockImplementation((columns) => {
      if (columns === pinnedColumns) {
        return 555;
      }

      if (columns === overflowColumns) {
        return 777;
      }
      return -1;
    });

    const result = DataGrid.WrappedComponent.getDerivedStateFromProps({}, 300);
    expect(result.pinnedColumnWidth).toEqual(555);
    expect(result.overflowColumnWidth).toEqual(777);
  });

  it('correctly applies the theme context className', () => {
    const dataGrid = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <DataGrid.WrappedComponent id="test" intl={mockIntl} />
      </ThemeContextProvider>,
    );
    expect(dataGrid).toMatchSnapshot();
  });
});

describe('rendering label and description', () => {

});
