import React from 'react';
import Header from '../../src/Header';

it('should render a default component', () => {
  const header = render(<Header />);
  expect(header).toMatchSnapshot();
});

it('should render a header with title and heading level', () => {
  const header = render(<Header id="test-id" level={1} text="title" />);
  expect(header).toMatchSnapshot();
});

it('should render a header with content on the left', () => {
  const header = render(<Header level={1} startContent={<div>start content</div>} />);
  expect(header).toMatchSnapshot();
});

it('should render a header with content on the right', () => {
  const header = render(<Header level={1} endContent={<div>end content</div>} />);
  expect(header).toMatchSnapshot();
});

it('should render a header with all content', () => {
  const header = render((
    <Header
      startContent={<div>start content</div>}
      text="Title"
      endContent={<div>end content</div>}
      level={1}
    />
  ));
  expect(header).toMatchSnapshot();
});

it('should render a subheader with title and heading level', () => {
  const subheader = render(<Header level={1} text="title" isSubheader />);
  expect(subheader).toMatchSnapshot();
});

it('should render a subheader with all content', () => {
  const subheader = render((
    <Header
      startContent={<div>start content</div>}
      text="Title"
      endContent={<div>end content</div>}
      isSubheader
      level={1}
    />
  ));
  expect(subheader).toMatchSnapshot();
});

it('should render a header with no text from level not set', () => {
  const header = render(<Header text="This title should not render without a provided level" />);
  expect(header).toMatchSnapshot();
});
