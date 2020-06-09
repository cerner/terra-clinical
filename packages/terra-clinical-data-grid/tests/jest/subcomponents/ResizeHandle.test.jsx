import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import ResizeHandle from '../../../src/subcomponents/ResizeHandle';

describe('ResizeHandle Snapshot Tests', () => {
  it('should render a ResizeHandle with minimal props', () => {
    const resizeHandle = shallow((
      <ResizeHandle id="test-handle" />
    ));

    expect(resizeHandle).toMatchSnapshot();
  });

  it('should render a ResizeHandle with all props', () => {
    const resizeHandle = shallow((
      <ResizeHandle
        id="test-handle"
        onResizeStop={() => {}}
      />
    ));

    expect(resizeHandle).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const resizeHandle = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <ResizeHandle id="test-handle" />
      </ThemeContextProvider>,
    );
    expect(resizeHandle).toMatchSnapshot();
  });
});
