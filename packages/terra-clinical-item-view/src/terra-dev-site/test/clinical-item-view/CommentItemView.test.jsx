import React from 'react';
import classNames from 'classnames/bind';
import ItemView from '../../../ItemView';
import styles from './ItemViewCommon.test.module.scss';

const cx = classNames.bind(styles);

const comment = id => <ItemView.Comment id={id} text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" />;

/* eslint-disable react/forbid-dom-props */
const ItemViews = () => (
  <div className={cx('comment-itemview-wrapper')}>
    <h2>Default</h2>
    <ItemView comment={comment(1)} id="ItemView1" />
    <br />
    <h2>Truncated</h2>
    <ItemView isTruncated comment={comment(2)} id="ItemView2" />
  </div>
);
/* eslint-enable react/forbid-dom-props */

export default ItemViews;
