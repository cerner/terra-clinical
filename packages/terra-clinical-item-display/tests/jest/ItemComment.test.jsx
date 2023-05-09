import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ItemComment from '../../src/ItemComment';

// Snapshot Tests
it('should render a default component', () => {
  const comment = shallowWithIntl(<ItemComment />).dive();
  expect(comment).toMatchSnapshot();
});

it('should render a comment with text', () => {
  const comment = shallowWithIntl(<ItemComment text="comment" />).dive();
  expect(comment).toMatchSnapshot();
});

it('should render a truncated comment', () => {
  const comment = shallowWithIntl(<ItemComment text="comment1comment1comment1comment1comment1comment1comment1comment1" isTruncated />).dive();
  expect(comment).toMatchSnapshot();
});

it('should render a comment with the attention textStyle on text', () => {
  const comment = shallowWithIntl(<ItemComment text="ItemComment" textStyle="attention" />).dive();
  expect(comment).toMatchSnapshot();
});

it('should render a comment with the secondary textStyle on text', () => {
  const comment = shallowWithIntl(<ItemComment text="ItemComment" textStyle="secondary" />).dive();
  expect(comment).toMatchSnapshot();
});

it('should render a comment with the strikeThrough textStyle on text', () => {
  const comment = shallowWithIntl(<ItemComment text="ItemComment" textStyle="strikeThrough" />).dive();
  expect(comment).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = shallowWithIntl(<ItemComment text="comment" />).dive();
  expect(wrapper).toMatchSnapshot();
});
