import React from 'react';
import { ResultNameHeaderCell, ResultTimeHeaderCell } from '../../lib/index';


// Snapshot Tests
it('should render a default component', () => {
  const nameHeaderCell = shallow(<ResultNameHeaderCell resultName="Blood Pressure" unit="mmHg" />);
  expect(nameHeaderCell).toMatchSnapshot();
});

it('should render a default ResultTimeHeaderCell component', () => {
  const timeHeaderCell = shallow(<ResultTimeHeaderCell date="Dec 21, 2010" time="23:59" />);
  expect(timeHeaderCell).toMatchSnapshot();
});
