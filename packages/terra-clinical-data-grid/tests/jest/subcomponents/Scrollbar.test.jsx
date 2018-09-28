import React from 'react';
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
});
