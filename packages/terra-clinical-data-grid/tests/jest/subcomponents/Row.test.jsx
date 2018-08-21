import React from 'react';
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
      >
        <div>Row Content</div>
      </Row>
    ));

    expect(row).toMatchSnapshot();
  });
});

