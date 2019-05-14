import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DetailView from 'terra-clinical-detail-view/lib/DetailView';
import classNames from 'classnames/bind';
import styles from './DetailViewDivided.scss';

const cx = classNames.bind(styles);

const detail1title = 'Diabetes';
const detail1item1 = (<LabelValueView label="Age of onset" textValue="38 years" />);
const detail1item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" />);
const detail1item3 = (<LabelValueView label="Comments" textValue="--" />);

const detail2title = 'Hypertension';
const detail2item1 = (<LabelValueView label="Age of onset" textValue="--" />);
const detail2item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" />);
const detail2item3 = (<LabelValueView label="Comments" textValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (Hollister MD, David 09/12/2011 11:34:12AM)" />);


const DetailViewDivided = () => (
  <div className={cx('detail-view-divided')}>
    <DetailView
      title="Mother"
      subtitles={['Martha (58 years)', '[second line for subtitles]']}
      details={[
        (
          <DetailView.DetailList title={detail1title} key="order-info-1">
            <DetailView.DetailListItem item={detail1item1} />
            <DetailView.DetailListItem item={detail1item2} />
            <DetailView.DetailListItem item={detail1item3} />
          </DetailView.DetailList>
        ),
        (
          <DetailView.DetailList title={detail2title} key="order-info-2">
            <DetailView.DetailListItem item={detail2item1} />
            <DetailView.DetailListItem item={detail2item2} />
            <DetailView.DetailListItem item={detail2item3} />
          </DetailView.DetailList>
        ),
      ]}
      footer="Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"
    />
  </div>
);

export default DetailViewDivided;
