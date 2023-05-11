import React from 'react';
import classNames from 'classnames/bind';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import DetailView from '../../../../DetailView';
import styles from './DetailViewCommon.test.module.scss';

const cx = classNames.bind(styles);

const item = (
  <div className={cx('indicator-container')}>
    <div className={cx('icon')}>
      <IconCritical a11yLabel="Critical Icon" />
      <div className={cx('text')}>
        Immediate Priority
      </div>
    </div>
  </div>
);
const item2 = (<p>A Detail List Item to prove float concept when screen readjusts smaller.</p>);
const accessoryElement = (<p> A sample accessory container </p>);

const DetailViewDividedSmallerTitles = () => (
  <DetailView
    title="Header"
    secondaryTitles={['secondaryTitle1', 'secondaryTitle2']}
    subtitles={['subtitle1', 'subTitle2']}
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
    id="DetailView"
    isSmallerTitles
  />
);

export default DetailViewDividedSmallerTitles;
