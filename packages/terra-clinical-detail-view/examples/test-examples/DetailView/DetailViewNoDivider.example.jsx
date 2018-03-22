/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import DetailView from '../../../lib/DetailView';

const item = (<p>A Detail List Item</p>);
const item2 = (<p>A Detail List Item to prove float concept when screen readjusts smaller.</p>);
const accessoryElement = (<p> A sample accessory container </p>);

const DetailViewNoDivider = () => (
  <DetailView
    title="Header"
    secondaryTitles={['secondaryTitle1', 'secondaryTitle2']}
    subtitles={['Subtitle 1', 'Subtitle 2']}
    graph={<div style={{ border: '1px solid black', height: '20em', width: '25em', marginBottom: '0.714rem' }}>This is where any visualizations would go</div>}
    accessory={accessoryElement}
    details={[
      (<DetailView.DetailList title="Detail List Title" key="detailInfo-1">
        <DetailView.DetailListItem item={item} />
        <DetailView.DetailListItem item={item} />
        <DetailView.DetailListItem item={item2} />
        <DetailView.DetailListItem item={item} />
        <DetailView.DetailListItem item={item} />
      </DetailView.DetailList>),
    ]}
    footer="Footer Text"
    isDivided={false}
    id="DetailView"
    isSmallerTitles={false}
  />
);

export default DetailViewNoDivider;
