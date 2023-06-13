import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';
import DetailView from 'terra-clinical-detail-view';
import classNames from 'classnames/bind';
import styles from './DetailViewDivided.module.scss';

const cx = classNames.bind(styles);

const item1 = (<LabelValueView label="Start Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList />);
const item2 = (<LabelValueView label="Stop Date" textValue="12/12/12 10:00AM" isChildOfDescriptionList />);
const item3 = (<LabelValueView label="Collected By" textValue="Nurse Collect" isChildOfDescriptionList />);
const item4 = (<LabelValueView label="Priority" textValue="High" isChildOfDescriptionList />);

const DetailViewDivided = () => (
  <div className={cx('detail-view-divided')}>
    <DetailView
      title="Complete Blood Count Order"
      subtitles={['Accession', '239493849']}
      details={[
        (
          <DetailView.DetailList title="Collection Details" type="labelValuePair" key="order-info-2">
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
