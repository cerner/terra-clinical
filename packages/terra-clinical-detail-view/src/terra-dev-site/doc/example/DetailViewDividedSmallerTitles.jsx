import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';
import ItemDisplay from 'terra-clinical-item-display';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import IconPharmacyReview from 'terra-icon/lib/icon/IconPharmacyReview';
import IconPharmacyReject from 'terra-icon/lib/icon/IconPharmacyReject';
import IconGlasses from 'terra-icon/lib/icon/IconGlasses';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DetailView from 'terra-clinical-detail-view/lib/DetailView';
import styles from './DetailViewDivided.scss';

const cx = classNames.bind(styles);

const detail1title = 'Indicators';
const detail1item1 = (<ItemDisplay text="Immediate Priority" icon={<IconCritical />} />);
const detail1item2 = (<ItemDisplay text="Pharmacy Review" icon={<IconPharmacyReview />} />);
const detail1item3 = (<ItemDisplay text="Nurse Review" icon={<IconGlasses />} />);
const detail1item4 = (<ItemDisplay text="Pharmacy Reject" icon={<IconPharmacyReject />} />);

const detail2title = 'Comments';
const detail2item1 = (<LabelValueView label="Order Comment" textValue="To be taken after lunch" />);
const detail2item2 = (<LabelValueView label="Mar Notes" textValue="Using the med from last 2 months" />);
const detail2item3 = (<LabelValueView label="Special Instructions" textValue="Never to be taken without eating" />);
const detail2item4 = (<LabelValueView label="Admin Notes" textValue="Try med for 2 more months" />);


const DetailViewDivided = () => (
  <div className={cx('detail-view-divided')}>
    <DetailView
      title="Multiple Ingredients"
      secondaryTitles={['M. V. I. Adult 10 mL = 10 mL', 'Sodium bicarbonate 8.4% 50 mL', 'Dextrose 5% in Water 1000 mL']}
      subtitles={['30 mg, Oral, Start Date/Time: 06/28/17 20:00:00 CDT. Stop Date/Time: 06/28/17 20:00:00 CDT']}
      accessory={<ItemDisplay text="Ordered" />}
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
