import React from 'react';
import ItemComment from '../../src/ItemComment';

// Snapshot Tests
it('should render a default component', () => {
  const comment = shallow(<ItemComment />);
  expect(comment).toMatchSnapshot();
});

it('should render a comment with text', () => {
  const comment = shallow(<ItemComment text="comment" />);
  expect(comment).toMatchSnapshot();
});

it('should render a truncated comment', () => {
  const comment = shallow(<ItemComment text="comment1comment1comment1comment1comment1comment1comment1comment1" isTruncated />);
  expect(comment).toMatchSnapshot();
});

it('should render a comment with the attention textStyle on text', () => {
  const comment = shallow(<ItemComment text="ItemComment" textStyle="attention" />);
  expect(comment).toMatchSnapshot();
});

it('should render a comment with the secondary textStyle on text', () => {
  const comment = shallow(<ItemComment text="ItemComment" textStyle="secondary" />);
  expect(comment).toMatchSnapshot();
});

it('should render a comment with the strikeThrough textStyle on text', () => {
  const comment = shallow(<ItemComment text="ItemComment" textStyle="strikeThrough" />);
  expect(comment).toMatchSnapshot();
});
