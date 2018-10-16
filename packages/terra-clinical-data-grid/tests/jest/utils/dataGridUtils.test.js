import dataGridUtils from '../../../src/utils/dataGridUtils';

const {
  VOID_COLUMN,
  ROW_SELECTION_COLUMN,
  getAccessibleContents,
  getWidthForColumn,
  getTotalColumnWidth,
  getPinnedColumns,
  getOverflowColumns,
  matchesSelector,
} = dataGridUtils;

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

    const accessibleElements = getAccessibleContents(testElement);

    expect(testElement.childNodes.length).toBe(3);
    expect(accessibleElements.length).toBe(2);
  });

  it('should find no accessible elements if none exist', () => {
    const testElement = document.createElement('div');
    testElement.appendChild(document.createElement('div'));
    testElement.appendChild(document.createElement('div'));
    testElement.appendChild(document.createElement('div'));
    testElement.appendChild(document.createElement('div'));

    const accessibleElements = getAccessibleContents(testElement);

    expect(testElement.childNodes.length).toBe(4);
    expect(accessibleElements.length).toBe(0);
  });
});

describe('ROW_SELECTION_COLUMN', () => {
  it('should return an object with the correct row selection column specifications', () => {
    const rowSelectionColumn = ROW_SELECTION_COLUMN;

    expect(rowSelectionColumn.id).toBe('DataGrid-rowSelectionColumn');
    expect(rowSelectionColumn.width).toEqual(50);
  });
});

describe('VOID_COLUMN', () => {
  it('should return an object with the correct void column specifications', () => {
    const voidColumn = VOID_COLUMN;

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

    expect(getWidthForColumn(testColumn)).toEqual(789);
  });

  it('should return the default width if no width is specified', () => {
    const testColumn = {
      id: 'test',
    };

    expect(getWidthForColumn(testColumn, 300)).toEqual(300);
  });

  it('should return the default width if no column is provided', () => {
    expect(getWidthForColumn(undefined, 200)).toEqual(200);
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

    expect(getTotalColumnWidth(columns)).toEqual(60);
  });

  it('should return the calculated total with only one column present', () => {
    const columns = [{
      id: 'test1',
      width: 10,
    }];

    expect(getTotalColumnWidth(columns)).toEqual(10);
  });

  it('should return 0 if no columns are provided', () => {
    expect(getTotalColumnWidth()).toEqual(0);
  });
});

describe('getPinnedColumns', () => {
  it('should return the prop columns along with the row selection column if row selection is enabled', () => {
    const pinnedColumns = [{
      id: 'column-0',
    }, {
      id: 'column-1',
    }];

    const result = getPinnedColumns({
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

    const result = getPinnedColumns({
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

    const result = getOverflowColumns({
      overflowColumns,
      hasResizableColumns: true,
    });

    expect(result.length).toBe(3);
    expect(result[0].id).toBe('column-0');
    expect(result[1].id).toBe('column-1');
    expect(result[2].id).toBe('DataGrid-voidColumn');
  });

  it('should not return the void column if columns are not resizable', () => {
    const overflowColumns = [{
      id: 'column-0',
    }, {
      id: 'column-1',
    }];

    const result = getOverflowColumns({
      overflowColumns,
      hasResizableColumns: false,
    });

    expect(result.length).toBe(2);
    expect(result[0].id).toBe('column-0');
    expect(result[1].id).toBe('column-1');
  });
});

describe('matchesSelector', () => {
  it('should return whether or not the element matches the selector', () => {
    const element = document.createElement('div');
    element.classList.add('test-class');

    expect(matchesSelector(element, '.test-class')).toBe(true);
  });

  it('should account for differences in IE support', () => {
    const element = document.createElement('div');
    element.classList.add('test-class');

    Element.prototype.msMatchesSelector = (selector) => {
      expect(selector).toBe('.test-class');
      return true;
    };

    expect(matchesSelector(element, '.test-class')).toBe(true);

    Element.prototype.msMatchesSelector = undefined;
  });
});
