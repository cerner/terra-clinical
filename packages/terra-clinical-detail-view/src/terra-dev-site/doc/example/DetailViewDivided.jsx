import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';
import DetailView from 'terra-clinical-detail-view';
import classNames from 'classnames/bind';
import styles from './DetailViewDivided.module.scss';

const cx = classNames.bind(styles);

const detail1title = 'Diabetes';
const detail1item1 = (<LabelValueView label="Age of onset" textValue="38 years" isChildOfDescriptionList />);
const detail1item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" isChildOfDescriptionList />);
const detail1item3 = (<LabelValueView label="Comments" textValue="Based on patient's blood glucose levels and medical history, I recommend that they continue to monitor their glucose levels regularly and adhere to a healthy diet and exercise regimen. It's important for the patient to attend regular follow-up appointments and communicate any concerns in symptoms." isChildOfDescriptionList />);

const detail2title = 'Hypertension';
const detail2item1 = (<LabelValueView label="Age of onset" textValue="38 years" isChildOfDescriptionList />);
const detail2item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" isChildOfDescriptionList />);
const detail2item3 = (<LabelValueView label="Comments" textValue="Based on the patient's blood pressure readings and medical history, I recommend that they make lifestyle modifications such as reducing their salt intake, increasing physical activity, and losing weight if necessary. It's important for the patient to continue monitoring their blood pressure at home and attend regular follow-up appointments to assess the effectiveness of their treatment plan." isChildOfDescriptionList />);

const DetailViewDivided = () => (
  <div className={cx('detail-view-divided')}>
    <DetailView
      title="Mother"
      level={3}
      subtitles={['Martha (58 years)', '[second line for subtitles]']}
      details={[
        (
          <DetailView.DetailList title={detail1title} key="order-info-1" isLabelValuePairList>
            <DetailView.DetailListItem item={detail1item1} />
            <DetailView.DetailListItem item={detail1item2} />
            <DetailView.DetailListItem item={detail1item3} />
          </DetailView.DetailList>
        ),
        (
          <DetailView.DetailList title={detail2title} key="order-info-2" isLabelValuePairList>
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
