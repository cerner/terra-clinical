/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ClinicalItemView from 'terra-clinical-item-view';
import DetailView from 'terra-clinical-detail-view';

const item = (<ClinicalItemView comment={<ClinicalItemView.Comment text="A Detail List Item" />} />);
const item2 = (<ClinicalItemView comment={<ClinicalItemView.Comment text="A Detail List Item to prove float concept when screen readjusts smaller." />} />);

const DetailViewDivided = () => (
  <DetailView
    title="Header"
    subtitles={['Subtitle 1', 'Subtitle 2']}
    graph={<div style={{ border: '1px solid black', height: '20em', width: '25em', marginBottom: '0.714rem' }}>This is where any visualizations would go</div>}
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
  />
);

export default DetailViewDivided;
