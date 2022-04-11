import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
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
        isColumnHighlighted
        isFirstRow
        isLastRow
        data-custom-attribute
        className="custom-class-name"
      >
        <div>Child here</div>
      </Cell>
    ));

    expect(cell).toMatchSnapshot();
  });

  it('should render a Cell in a highlighted column', () => {
    const cell = shallow((
      <Cell
        sectionId="section-test"
        rowId="row-test"
        columnId="column-test"
        width="123px"
        isColumnHighlighted
        isFirstRow
        isLastRow
      >
        <div>Child here</div>
      </Cell>
    ));

    expect(cell).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const cell = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Cell
          sectionId="section-test"
          rowId="row-test"
          columnId="column-test"
          width="123px"
        />
      </ThemeContextProvider>,
    );
    expect(cell).toMatchSnapshot();
  });
});
