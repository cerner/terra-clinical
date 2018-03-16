import React from 'react';
import ItemView from '../../lib/ItemView';

const comment1 = <ItemView.Comment text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" id="ItemComment1" />;
const comment2 = <ItemView.Comment text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" id="ItemComment2" />;

const ItemViews = () => (
  <div style={{ width: '250px' }}>
    <h2>Default</h2>
    <ItemView comment={comment1} id="ItemView1" />
    <br />
    <h2>Truncated</h2>
    <ItemView isTruncated comment={comment2} id="ItemView2" />
  </div>
);

export default ItemViews;
