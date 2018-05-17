import React from 'react';

import DetailView from '../../../../DetailView';

const item = (<p>A Detail List Item</p>);
const item2 = (<p>A Detail List Item to prove float concept when screen readjusts.</p>);

const DefaultDetailList = () => (
  <DetailView.DetailList title="Detail List Title" key="detailInfo-1">
    <DetailView.DetailListItem item={item} />
    <DetailView.DetailListItem item={item} />
    <DetailView.DetailListItem item={item2} />
    <DetailView.DetailListItem item={item} />
    <DetailView.DetailListItem item={item} />
  </DetailView.DetailList>);

export default DefaultDetailList;
