import React from 'react';
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
});
