import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DetailView from 'terra-clinical-detail-view/lib/DetailView';

const item1 = (<LabelValueView label="Start Date" textValue="12/12/12 00:00AM" />);
const item2 = (<LabelValueView label="Stop Date" textValue="12/12/12 10:00AM" />);
const item3 = (<LabelValueView label="Collected By" textValue="Nuse Collect" />);
const item4 = (<LabelValueView label="Priority" textValue="High" />);

const DetailViewDivided = () => (
  <div style={{ border: '3px dotted #d3d4d5' }}>
    <DetailView
      title="Complete Blood Count Order"
      subtitles={['Accession', '239493849']}
      details={[
        (
          <DetailView.DetailList title="Collection Details" key="order-info-2">
            <DetailView.DetailListItem item={item1} />
            <DetailView.DetailListItem item={item2} />
            <DetailView.DetailListItem item={item3} />
            <DetailView.DetailListItem item={item4} />
          </DetailView.DetailList>
        ),
      ]}
      isDivided={false}
    />
  </div>
);

export default DetailViewDivided;
