import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import Row from '../../../src/subcomponents/Row';

describe('Row Snapshot Tests', () => {
  it('should render a Row with minimal props', () => {
    const row = shallow((
      <Row
        sectionId="section-test"
        rowId="row-test"
        width="123px"
        height="4rem"
      />
    ));

    expect(row).toMatchSnapshot();
  });

  it('should render a Row with all provided props', () => {
    const row = shallow((
      <Row
        sectionId="section-test"
        rowId="row-test"
        width="123px"
        height="4rem"
        isSelected
        isStriped
      >
        <div>Row Content</div>
      </Row>
    ));

    expect(row).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const row = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Row
          sectionId="section-test"
          rowId="row-test"
          width="123px"
          height="4rem"
        />
      </ThemeContextProvider>,
    );
    expect(row).toMatchSnapshot();
  });
});
