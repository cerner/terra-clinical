import React from 'react';
import Header from '../../src/Header';

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

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
  const consoleSpy = jest.spyOn(global.console, 'warn');
  const subheader = render(<Header level={1} title="title" isSubheader />);
  const titleWarningMessage = 'The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`.';
  expect(consoleSpy).toHaveBeenCalledWith(titleWarningMessage);
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

it('should render a header with default heading level when level not set', () => {
  const consoleSpy = jest.spyOn(global.console, 'warn');
  const header = render(<Header text="This title should render with a default level" />);
  const levelWarningMessage = 'Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently.';
  expect(consoleSpy).toHaveBeenCalledWith(levelWarningMessage);
  expect(header).toMatchSnapshot();
});
