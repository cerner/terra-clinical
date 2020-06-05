import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import Scrollbar from '../../../src/subcomponents/Scrollbar';

describe('Scrollbar Snapshot Tests', () => {
  it('should render a Scrollbar with minimal props', () => {
    const scrollbar = shallow((
      <Scrollbar />
    ));

    expect(scrollbar).toMatchSnapshot();
  });

  it('should render a Scrollbar with all provided props', () => {
    const scrollbar = shallow((
      <Scrollbar
        onMoveStart={() => {}}
        onMoveEnd={() => {}}
        onMove={() => {}}
        refCallback={() => {}}
        scrollbarRefCallback={() => {}}
      />
    ));

    expect(scrollbar).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const scrollbar = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Scrollbar />
      </ThemeContextProvider>,
    );
    expect(scrollbar).toMatchSnapshot();
  });
});
