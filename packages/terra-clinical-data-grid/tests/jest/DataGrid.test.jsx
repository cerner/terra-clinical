import React from 'react';
import DataGrid from '../../src/DataGrid';

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

describe('DataGrid Snapshots', () => {
  it('should render a DataGrid with missing optional props', () => {
    const dataGrid = shallow(<DataGrid accessibilityPrefix="test" />);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with only overflow columns', () => {
    const dataGridComp = (
      <DataGrid
        accessibilityPrefix="test"
        overflowColumns={[testColumns['Column-0'], testColumns['Column-1'], testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        fill
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with pinned and overflow columns', () => {
    const dataGridComp = (
      <DataGrid
        accessibilityPrefix="test"
        pinnedColumns={[testColumns['Column-0'], testColumns['Column-1']]}
        overflowColumns={[testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        fill
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with custom row and header heights', () => {
    const dataGridComp = (
      <DataGrid
        accessibilityPrefix="test"
        overflowColumns={[testColumns['Column-0'], testColumns['Column-1'], testColumns['Column-2'], testColumns['Column-3']]}
        sections={testSections}
        rowHeight="5rem"
        headerHeight="10rem"
        fill
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with selectable rows, columns, and cells', () => {
    const dataGridComp = (
      <DataGrid
        accessibilityPrefix="test"
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
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with custom header cells', () => {
    const dataGridComp = (
      <DataGrid
        accessibilityPrefix="test"
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
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render a DataGrid with custom section header', () => {
    const dataGridComp = (
      <DataGrid
        accessibilityPrefix="test"
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
      />
    );

    const dataGrid = shallow(dataGridComp);
    expect(dataGrid).toMatchSnapshot();
  });
});

describe('getAccessibleContents', () => {
  it('should find all accessible elements within in the given element', () => {
    const accessibleElement1 = document.createElement('div');
    accessibleElement1.setAttribute('data-accessible-data-grid-content', '');

    const accessibleElement2 = document.createElement('div');
    accessibleElement2.setAttribute('data-accessible-data-grid-content', '');

    const testElement = document.createElement('div');
    testElement.appendChild(accessibleElement1);
    testElement.appendChild(accessibleElement2);
    testElement.appendChild(document.createElement('div'));

    const accessibleElements = DataGrid.getAccessibleContents(testElement);

    expect(testElement.childNodes.length).toBe(3);
    expect(accessibleElements.length).toBe(2);
  });

  it('should find no accessible elements if none exist', () => {
    const testElement = document.createElement('div');
    testElement.appendChild(document.createElement('div'));
    testElement.appendChild(document.createElement('div'));
    testElement.appendChild(document.createElement('div'));
    testElement.appendChild(document.createElement('div'));

    const accessibleElements = DataGrid.getAccessibleContents(testElement);

    expect(testElement.childNodes.length).toBe(4);
    expect(accessibleElements.length).toBe(0);
  });
});

describe('getRowSelectionColumn', () => {
  it('should return an object with the correct row selection column specifications', () => {
    const rowSelectionColumn = DataGrid.getRowSelectionColumn();

    expect(rowSelectionColumn.id).toBe('DataGrid-rowSelectionColumn');
    expect(rowSelectionColumn.width).toEqual(50);
  });
});

describe('getVoidColumn', () => {
  it('should return an object with the correct void column specifications', () => {
    const voidColumn = DataGrid.getVoidColumn();

    expect(voidColumn.id).toBe('DataGrid-voidColumn');
    expect(voidColumn.width).toEqual(150);
  });
});

describe('getWidthForColumn', () => {
  it('should return the specified width if present', () => {
    const testColumn = {
      id: 'test',
      width: 789,
    };

    expect(DataGrid.getWidthForColumn(testColumn)).toEqual(789);
  });

  it('should return the default width if no width is specified', () => {
    const testColumn = {
      id: 'test',
    };

    expect(DataGrid.getWidthForColumn(testColumn)).toEqual(200);
  });

  it('should return the default width if no column is provided', () => {
    expect(DataGrid.getWidthForColumn()).toEqual(200);
  });
});

describe('getTotalColumnWidth', () => {
  it('should return the calculated total', () => {
    const columns = [{
      id: 'test1',
      width: 10,
    }, {
      id: 'test2',
      width: 20,
    }, {
      id: 'test3',
      width: 30,
    }];

    expect(DataGrid.getTotalColumnWidth(columns)).toEqual(60);
  });

  it('should return the calculated total with only one column present', () => {
    const columns = [{
      id: 'test1',
      width: 10,
    }];

    expect(DataGrid.getTotalColumnWidth(columns)).toEqual(10);
  });

  it('should return 0 if no columns are provided', () => {
    expect(DataGrid.getTotalColumnWidth()).toEqual(0);
  });
});

describe('getPinnedColumns', () => {
  it('should return the prop columns along with the row selection column if row selection is enabled', () => {
    const pinnedColumns = [{
      id: 'column-0',
    }, {
      id: 'column-1',
    }];

    const result = DataGrid.getPinnedColumns({
      pinnedColumns,
      hasSelectableRows: true,
    });

    expect(result.length).toBe(3);
    expect(result[0].id).toBe('DataGrid-rowSelectionColumn');
    expect(result[1].id).toBe('column-0');
    expect(result[2].id).toBe('column-1');
  });

  it('should return the prop columns, omitting the row selection column when disabled', () => {
    const pinnedColumns = [{
      id: 'column-0',
    }, {
      id: 'column-1',
    }];

    const result = DataGrid.getPinnedColumns({
      pinnedColumns,
      hasSelectableRows: false,
    });

    expect(result.length).toBe(2);
    expect(result[0].id).toBe('column-0');
    expect(result[1].id).toBe('column-1');
  });
});

describe('getOverflowColumns', () => {
  it('should return the prop columns along with the void column', () => {
    const overflowColumns = [{
      id: 'column-0',
    }, {
      id: 'column-1',
    }];

    const result = DataGrid.getOverflowColumns({
      overflowColumns,
    });

    expect(result.length).toBe(3);
    expect(result[0].id).toBe('column-0');
    expect(result[1].id).toBe('column-1');
    expect(result[2].id).toBe('DataGrid-voidColumn');
  });
});

describe('matchesSelector', () => {
  it('should return whether or not the element matches the selector', () => {
    const element = document.createElement('div');
    element.classList.add('test-class');

    expect(DataGrid.matchesSelector(element, '.test-class')).toBe(true);
  });

  it('should account for differences in IE support', () => {
    const element = document.createElement('div');
    element.classList.add('test-class');

    Element.prototype.msMatchesSelector = (selector) => {
      expect(selector).toBe('.test-class');
      return true;
    };

    expect(DataGrid.matchesSelector(element, '.test-class')).toBe(true);

    Element.prototype.msMatchesSelector = undefined;
  });
});

describe('calculateScrollbarPosition', () => {
  it('calculates the correct scrollbar position when its within proper min/max values', () => {
    const result = DataGrid.calculateScrollbarPosition(100, 200, 0, 10);

    expect(result.position).toEqual(10);
    expect(result.ratio).toEqual(0.1);
  });

  it('calculates the scrollbar position with lower bound protection', () => {
    const result = DataGrid.calculateScrollbarPosition(100, 200, 10, -20);

    expect(result.position).toEqual(0);
    expect(result.ratio).toEqual(0);
  });

  it('calculates the scrollbar position with upper bound protection', () => {
    const result = DataGrid.calculateScrollbarPosition(100, 200, 90, 20);

    expect(result.position).toEqual(100);
    expect(result.ratio).toEqual(1);
  });
});

describe('getDerivedStateFromProps', () => {
  let getPinnedColumnsRef;
  let getOverflowColumnsRef;
  let getTotalColumnWidthRef;

  beforeEach(() => {
    getPinnedColumnsRef = DataGrid.getPinnedColumns;
    getOverflowColumnsRef = DataGrid.getOverflowColumns;
    getTotalColumnWidthRef = DataGrid.getTotalColumnWidth;
  });

  afterEach(() => {
    DataGrid.getPinnedColumns = getPinnedColumnsRef;
    DataGrid.getOverflowColumns = getOverflowColumnsRef;
    DataGrid.getTotalColumnWidth = getTotalColumnWidthRef;
  });

  it('should return the calculated pinned/overflow column widths', () => {
    const pinnedColumns = {};
    const overflowColumns = {};

    DataGrid.getPinnedColumns = jest.fn().mockReturnValue(pinnedColumns);
    DataGrid.getOverflowColumns = jest.fn().mockReturnValue(overflowColumns);
    DataGrid.getTotalColumnWidth = jest.fn()
      .mockImplementation((columns) => {
        if (columns === pinnedColumns) {
          return 555;
        } else if (columns === overflowColumns) {
          return 777;
        }
        return -1;
      });

    const result = DataGrid.getDerivedStateFromProps();
    expect(result.pinnedColumnWidth).toEqual(555);
    expect(result.overflowColumnWidth).toEqual(777);
  });
});
