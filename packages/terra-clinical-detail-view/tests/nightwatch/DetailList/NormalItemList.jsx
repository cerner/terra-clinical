/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import DetailView from '../../../lib/DetailView';

const item = (<p>A Detail List Item</p>);

const DefaultDetailList = () => (
  <DetailView.DetailList title="Detail List Title" key="detailInfo-1" id="DetailList">
    <DetailView.DetailListItem item={item} />
    <DetailView.DetailListItem item={item} />
    <DetailView.DetailListItem item={item} />
    <DetailView.DetailListItem item={item} />
    <DetailView.DetailListItem item={item} />
  </DetailView.DetailList>);

export default DefaultDetailList;
