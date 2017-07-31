import React from 'react';
import ItemView from '../../lib/ItemView';

const comment = <ItemView.Comment text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" id="ItemComment" />;

const ItemViews = () => (
  <div style={{ width: '250px' }}>
    <h2>Default</h2>
    <ItemView comment={comment} id="ItemView1" />
    <br />
    <h2>Truncated</h2>
    <ItemView isTruncated comment={comment} id="ItemView2" />
  </div>
);

export default ItemViews;
