import React from 'react';
import ItemView from '../../../../ItemView';

const comment = id => <ItemView.Comment id={id} text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" />;

const ItemViews = () => (
  <div style={{ width: '250px' }}>
    <ItemView isTruncated comment={comment(1)} id="ItemView1" />
  </div>
);

export default ItemViews;
