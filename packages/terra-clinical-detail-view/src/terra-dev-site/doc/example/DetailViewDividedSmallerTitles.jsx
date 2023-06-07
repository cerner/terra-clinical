import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import IconPharmacyReview from 'terra-icon/lib/icon/IconPharmacyReview';
import IconPharmacyReject from 'terra-icon/lib/icon/IconPharmacyReject';
import IconGlasses from 'terra-icon/lib/icon/IconGlasses';
import classNames from 'classnames/bind';
import DetailView from 'terra-clinical-detail-view';
import styles from './DetailViewDivided.module.scss';

const cx = classNames.bind(styles);

const detail1title = 'Indicators';
const detail1item1 = (
  <div className={cx('indicator-container')}>
    <div className={cx('icon')}>
      <IconCritical a11yLabel="Critical Icon" />
    </div>
    <div className={cx('text')}>
      Immediate Priority
    </div>
  </div>
);
const detail1item2 = (
  <div className={cx('indicator-container')}>
    <div className={cx('icon')}>
      <IconPharmacyReview a11yLabel="Pharmacy Review" />
    </div>
    <div className={cx('text')}>
      Pharmacy Review
    </div>
  </div>
);
const detail1item3 = (
  <div className={cx('indicator-container')}>
    <div className={cx('icon')}>
      <IconGlasses a11yLabel="Nurse review" />
    </div>
    <div className={cx('text')}>
      Nurse Review
    </div>
  </div>
);
const detail1item4 = (
  <div className={cx('indicator-container')}>
    <div className={cx('icon')}>
      <IconPharmacyReject a11yLabel="Pharmacy Reject" />
    </div>
    <div className={cx('text')}>
      Pharmacy Reject
    </div>
  </div>
);

const detail2title = 'Comments';
const detail2item1 = (<LabelValueView label="Order Comment" textValue="To be taken after lunch" />);
const detail2item2 = (<LabelValueView label="Mar Notes" textValue="Using the med from last 2 months" />);
const detail2item3 = (<LabelValueView label="Special Instructions" textValue="Never to be taken without eating" />);
const detail2item4 = (<LabelValueView label="Admin Notes" textValue="Try med for 2 more months" />);

const DetailViewDivided = () => (
  <div className={cx('detail-view-divided')}>
    <DetailView
      title="Multiple Ingredients"
      level={4}
      secondaryTitles={['M. V. I. Adult 10 mL = 10 mL', 'Sodium bicarbonate 8.4% 50 mL', 'Dextrose 5% in Water 1000 mL']}
      subtitles={['30 mg, Oral, Start Date/Time: 06/28/17 20:00:00 CDT. Stop Date/Time: 06/28/17 20:00:00 CDT']}
      accessory={(
        <div className={cx('indicator-container')}>
          <div className={cx('text')}>
            Ordered
          </div>
        </div>
      )}
      details={[
        (
          <DetailView.DetailList title={detail1title} key="Indicators">
            <DetailView.DetailListItem item={detail1item1} />
            <DetailView.DetailListItem item={detail1item2} />
            <DetailView.DetailListItem item={detail1item3} />
            <DetailView.DetailListItem item={detail1item4} />
          </DetailView.DetailList>
        ),
        (
          <DetailView.DetailList title={detail2title} key="Comments">
            <DetailView.DetailListItem item={detail2item1} />
            <DetailView.DetailListItem item={detail2item2} />
            <DetailView.DetailListItem item={detail2item3} />
            <DetailView.DetailListItem item={detail2item4} />
          </DetailView.DetailList>
        ),
      ]}
      footer="Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"
      isSmallerTitles
    />
  </div>
);

export default DetailViewDivided;
