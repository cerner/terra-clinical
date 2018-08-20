import React from 'react';
import Cell from '../../../src/subcomponents/Cell';

describe('Cell Snapshot Tests', () => {
  it('should render a Cell with minimal props', () => {
    const cell = shallow((
      <Cell
        sectionId="section-test"
        rowId="row-test"
        columnId="column-test"
        width="123px"
      />
    ));

    expect(cell).toMatchSnapshot();
  });

  it('should render a Cell with all provided props', () => {
    const cell = shallow((
      <Cell
        sectionId="section-test"
        rowId="row-test"
        columnId="column-test"
        width="123px"
        isSelectable
        isSelected
        onSelect={() => {}}
        onHoverStart={() => {}}
        onHoverEnd={() => {}}
        selectableRefCallback={() => {}}
        data-custom-attribute
        className="custom-class-name"
      >
        <div>Child here</div>
      </Cell>
    ));

    expect(cell).toMatchSnapshot();
  });
});

