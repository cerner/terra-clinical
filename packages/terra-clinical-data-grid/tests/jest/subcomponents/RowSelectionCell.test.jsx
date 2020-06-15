import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import RowSelectionCell from '../../../src/subcomponents/RowSelectionCell';

describe('Cell Snapshot Tests', () => {
  it('should render a Cell with minimal props', () => {
    const cell = shallow((
      <RowSelectionCell
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
      <RowSelectionCell
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
        ariaLabel="test label"
      />
    ));

    expect(cell).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const cell = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <RowSelectionCell
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
