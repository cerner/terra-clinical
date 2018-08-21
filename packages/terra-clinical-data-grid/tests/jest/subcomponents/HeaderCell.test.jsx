import React from 'react';
import HeaderCell from '../../../src/subcomponents/HeaderCell';

describe('HeaderCell Snapshot Tests', () => {
  it('should render a HeaderCell with minimal props', () => {
    const cell = shallow((
      <HeaderCell
        columnId="column-test"
        width="123px"
      />
    ));

    expect(cell).toMatchSnapshot();
  });

  it('should render a Cell with all provided props for default rendering', () => {
    const cell = shallow((
      <HeaderCell
        columnId="column-test"
        width="123px"
        text="Test HeaderCell"
        sortIndicator="ascending"
        isSelectable
        onSelect={() => {}}
        selectableRefCallback={() => {}}
        isResizable
        onResizeEnd={() => {}}
      />
    ));

    expect(cell).toMatchSnapshot();
  });

  it('should render a Cell with custom contents if provided', () => {
    const cell = shallow((
      <HeaderCell
        columnId="column-test"
        width="123px"
        text="Test HeaderCell (this should not be rendered)"
        sortIndicator="ascending"
        isSelectable
        onSelect={() => {}}
        selectableRefCallback={() => {}}
        isResizable
        onResizeEnd={() => {}}
      >
        <div>Custom HeaderCell Content</div>
      </HeaderCell>
    ));

    expect(cell).toMatchSnapshot();
  });
});

