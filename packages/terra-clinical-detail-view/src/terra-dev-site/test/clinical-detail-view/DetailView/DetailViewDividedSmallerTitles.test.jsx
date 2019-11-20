import React from 'react';
import classNames from 'classnames/bind';
import DetailView from '../../../../DetailView';
import styles from './DetailViewCommon.test.module.scss';

const cx = classNames.bind(styles);

const item = (<p>A Detail List Item</p>);
const item2 = (<p>A Detail List Item to prove float concept when screen readjusts smaller.</p>);
const accessoryElement = (<p> A sample accessory container </p>);

const DetailViewDividedSmallerTitles = () => (
  <DetailView
    title="Header"
    secondaryTitles={['secondaryTitle1', 'secondaryTitle2']}
    subtitles={['subtitle1', 'subTitle2']}
    graph={(
      <div className={cx('graph-content')} tabIndex="0">
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
