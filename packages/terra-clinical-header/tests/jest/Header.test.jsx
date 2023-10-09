import React from 'react';
import { shallowWithIntl } from 'terra-enzyme-intl';

import Header from '../../src/Header';

const mockFunc = jest.fn();
afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

it('should render a default component', () => {
  const header = shallow(<Header />);
  expect(header).toMatchSnapshot();
});

it('should render a header with title', () => {
  const header = shallow(<Header text="title" />);

  const headerTitle = header.find('h1');
  expect(headerTitle.text()).toEqual('title');
  expect(header).toMatchSnapshot();
});

it('should render a header with id', () => {
  const header = shallow(<Header id="test-id" text="title" />);

  const headerTitle = header.find('h1');
  expect(headerTitle.prop('id')).toEqual('test-id');
  expect(headerTitle.text()).toEqual('title');
  expect(header).toMatchSnapshot();
});

it('should render a header with heading level', () => {
  const header = shallow(<Header level={2} text="title" />);

  const headerTitle = header.find('h2');
  expect(headerTitle.text()).toEqual('title');
  expect(header).toMatchSnapshot();
});

it('should render a header with content on the left', () => {
  const startContent = <div id="start-id">start content</div>;
  const flexFill = <div className="flex-fill" />;
  const flexEnd = <div className="flex-end">{startContent}</div>;
  const header = shallow(<Header startContent={startContent} />);

  // ensure flex-fill title container is after start content
  expect(header.find('.flex-header').props().children[0]).toEqual(flexEnd);
  expect(header.find('.flex-header').props().children[1]).toEqual(flexFill);
  expect(header).toMatchSnapshot();
});

it('should render a header with content on the right', () => {
  const endContent = <div id="end-id">end content</div>;
  const flexFill = <div className="flex-fill" />;
  const flexEnd = <div className="flex-end">{endContent}</div>;
  const header = shallow(<Header endContent={endContent} />);

  // ensure flex-fill title container is before end content
  expect(header.find('.flex-header').props().children[1]).toEqual(flexFill);
  expect(header.find('.flex-header').props().children[3]).toEqual(flexEnd);
  expect(header).toMatchSnapshot();
});

it('should render a header with all content', () => {
  const startContent = <div id="start-id">start content</div>;
  const endContent = <div id="end-id">end content</div>;
  const flexFill = (
    <div className="flex-fill">
      <div className="title-container">
        <h1 className="title">Title</h1>
      </div>
    </div>
  );
  const flexEndStart = <div className="flex-end">{startContent}</div>;
  const flexEndEnd = <div className="flex-end">{endContent}</div>;
  const header = shallow((
    <Header
      startContent={startContent}
      text="Title"
      endContent={endContent}
    />
  ));

  const headerTitle = header.find('h1');
  expect(headerTitle.text()).toEqual('Title');
  expect(header.find('.flex-header').props().children[0]).toEqual(flexEndStart);
  expect(header.find('.flex-header').props().children[1]).toEqual(flexFill);
  expect(header.find('.flex-header').props().children[3]).toEqual(flexEndEnd);
  expect(header).toMatchSnapshot();
});

it('should render a subheader with title and heading level', () => {
  const consoleSpy = jest.spyOn(global.console, 'warn');
  const subheader = shallow(<Header title="title" isSubheader />);
  const titleWarningMessage = 'The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`.';

  expect(subheader.prop('className')).toEqual('flex-header subheader');
  expect(subheader.find('h1').text()).toEqual('title');
  expect(consoleSpy).toHaveBeenCalledWith(titleWarningMessage);
  expect(subheader).toMatchSnapshot();
});

it('should render a subheader with all content', () => {
  const subheader = shallow((
    <Header
      startContent={<div>start content</div>}
      text="Title"
      endContent={<div>end content</div>}
      isSubheader
    />
  ));
  expect(subheader).toMatchSnapshot();
});

it('should render a header with default heading level when level not set', () => {
  const consoleSpy = jest.spyOn(global.console, 'warn');
  const title = 'This title should render with a default level';
  const header = shallow(<Header text={title} />);
  const levelWarningMessage = 'Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently.';

  expect(header.find('h1').text()).toEqual(title);
  expect(consoleSpy).toHaveBeenCalledWith(levelWarningMessage);
  expect(header).toMatchSnapshot();
});

it('should render a header with hyperlink title', () => {
  const header = shallowWithIntl(<Header onClick={mockFunc} text="Title" />);

  expect(header.find('h1').length).toEqual(1);
  const hyperlinkButton = header.find('InjectIntl(Hyperlink)');
  expect(hyperlinkButton.prop('onClick')).toEqual(mockFunc);
  expect(hyperlinkButton.prop('text')).toEqual('Title');
  expect(header).toMatchSnapshot();
});

