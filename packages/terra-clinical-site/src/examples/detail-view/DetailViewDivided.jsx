/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import DetailView from 'terra-clinical-detail-view';
import ItemView from 'terra-clinical-item-view';
import IconHighPriority from 'terra-icon/lib/icon/IconHighPriority';
import LabelValueView from 'terra-clinical-label-value-view';

const item1 = (<LabelValueView label="Start Date" textValue="12/12/12 00:00AM" />);
const item2 = (<LabelValueView label="Stop Date" textValue="12/12/12 10:00AM" />);
const item3 = (<LabelValueView label="Collected By" textValue="Nuse Collect" />);
const item4 = (<LabelValueView label="Priority" textValue="High" />);

const DetailViewDivided = () => (
  <DetailView
    title="Complete Blood Count Order"
    subtitles={['Accession', '239493849']}
    graph={<img alt="CBC Results" style={{ height: '100px', width: '100px' }} />}
    details={[
      (<ItemView
        displays={[
          <ItemView.Display text="Blue Top 4mL" />,
          <ItemView.Display text="Due: 12/12/12 10:00AM" />,
        ]}
        startAccessory={<IconHighPriority />}
        isTruncated
        textEmphasis="start"
        comment={<ItemView.Comment text="Try to run this container first." />}
        key="order-info-1"
      />),
      (<DetailView.DetailList title="Collection Details" key="order-info-2">
        <DetailView.DetailListItem item={item1} />
        <DetailView.DetailListItem item={item2} />
        <DetailView.DetailListItem item={item3} />
        <DetailView.DetailListItem item={item4} />
      </DetailView.DetailList>),
    ]}
    footer="This should be kept at room temperature."
  />
);

export default DetailViewDivided;
