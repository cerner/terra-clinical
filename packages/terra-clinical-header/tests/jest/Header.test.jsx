import React from 'react';
import Header from '../../src/Header';

it('should render a default component', () => {
  const header = render(<Header />);
  expect(header).toMatchSnapshot();
});

it('should render a header with title only', () => {
  const header = render(<Header title="title" />);
  expect(header).toMatchSnapshot();
});

it('should render a header with content on the left', () => {
  const header = render(<Header startContent={<div>start content</div>} />);
  expect(header).toMatchSnapshot();
});

it('should render a header with content on the right', () => {
  const header = render(<Header endContent={<div>end content</div>} />);
  expect(header).toMatchSnapshot();
});

it('should render a header with all content', () => {
  const header = render((
    <Header
      startContent={<div>start content</div>}
      title="Title"
      endContent={<div>end content</div>}
    />
  ));
  expect(header).toMatchSnapshot();
});

it('should render a subheader with title only', () => {
  const subheader = render(<Header title="title" isSubheader />);
  expect(subheader).toMatchSnapshot();
});

it('should render a subheader with all content', () => {
  const subheader = render((
    <Header
      startContent={<div>start content</div>}
      title="Title"
      endContent={<div>end content</div>}
      isSubheader
    />
  ));
  expect(subheader).toMatchSnapshot();
});
