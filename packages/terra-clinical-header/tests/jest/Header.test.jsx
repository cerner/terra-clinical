import React from 'react';
import Header from '../../src/Header';

it('should render a default component', () => {
  const header = shallow(<Header />);
  expect(header).toMatchSnapshot();
});

it('should render a header with title only', () => {
  const header = shallow(<Header title="title" />);
  expect(header).toMatchSnapshot();
});

it('should render a header with content on the left', () => {
  const header = shallow(<Header startContent={<div>start content</div>} />);
  expect(header).toMatchSnapshot();
});

it('should render a header with content on the right', () => {
  const header = shallow(<Header endContent={<div>end content</div>} />);
  expect(header).toMatchSnapshot();
});

it('should render a header with all content', () => {
  const header = shallow((
    <Header
      startContent={<div>start content</div>}
      title="Title"
      endContent={<div>end content</div>}
    />
  ));
  expect(header).toMatchSnapshot();
});
