import React from 'react';
import classNames from 'classnames/bind';

import DetailView from '../../../../DetailView';
import styles from './ListItemSpansListWidth.test.module.scss';

const cx = classNames.bind(styles);

const item = (<p>A Detail List Item</p>);
const item2 = (<p>A Detail List Item that spans the width of the list</p>);

const DetailList = () => (
  <DetailView.DetailList title="Detail List Title" key="detailList-1">
    <DetailView.DetailListItem item={item} />
    <DetailView.DetailListItem item={item} />
    <DetailView.DetailListItem item={item2} className={cx('spanned-list-item')} />
  </DetailView.DetailList>
);

export default DetailList;
