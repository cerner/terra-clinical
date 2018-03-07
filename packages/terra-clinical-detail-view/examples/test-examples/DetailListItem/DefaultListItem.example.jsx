/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import DetailView from '../../../lib/DetailView';

const item = (<p>A Detail List Item</p>);

const DefaultDetailList = () => (
  <DetailView.DetailListItem item={item} id="DetailListItem" />
);

export default DefaultDetailList;
