import React from 'react';
import classNames from 'classnames/bind';

import DetailView from '../../../../DetailView';
import styles from './DetailViewCommon.test.module.scss';

const cx = classNames.bind(styles);

const item = (<p>A Detail List Item</p>);
const item2 = (<p>A Detail List Item to prove float concept when screen readjusts smaller.</p>);
const accessoryElement = (<p> A sample accessory container </p>);

const DetailViewOverflowText = () => (
  <DetailView
    title={'OverflowText'.repeat(10)}
    secondaryTitles={['secondaryTitle1'.repeat(15), 'secondaryTitle2'.repeat(15)]}
    subtitles={['Subtitle1'.repeat(25), 'Subtitle2'.repeat(25)]}
    graph={(
      <div className={cx('graph-content')}>
        This is where any visualizations would go
      </div>
)}
    accessory={accessoryElement}
    details={[
      (
        <DetailView.DetailList title="Detail List Title" key="detailInfo-1">
          <DetailView.DetailListItem item={item} />
          <DetailView.DetailListItem item={item} />
          <DetailView.DetailListItem item={item2} />
          <DetailView.DetailListItem item={item} />
          <DetailView.DetailListItem item={item} />
        </DetailView.DetailList>
      ),
    ]}
    footer="Footer Text"
    isDivided={false}
    id="DetailView"
    isSmallerTitles={false}
  />
);

export default DetailViewOverflowText;
