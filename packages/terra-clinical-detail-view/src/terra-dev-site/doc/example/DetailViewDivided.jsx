import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';
import DetailView from 'terra-clinical-detail-view';
import classNames from 'classnames/bind';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';
import '@cerner/carbon-graphs/dist/css/carbon-graphs.css';
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

const graphConfiguration = {
  bindTo: '#graph-id',
  axis: {
    x: {
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Datetime',
      lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),
      upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),
    },
    y: {
      label: 'Temperature (degF)',
      lowerLimit: 90,
      upperLimit: 106,
    },
  },
};

const dataset = {
  key: 'uid_1',
  label: {
    display: 'Oral Temperature',
  },
  shape: Carbon.helpers.SHAPES.RHOMBUS,
  color: Carbon.helpers.COLORS.BLUE,
  values: [
    {
      x: new Date(2016, 0, 1, 10, 5).toISOString(),
      y: 96.5,
    },
    {
      x: new Date(2016, 0, 1, 12, 15).toISOString(),
      y: 98.7,
    },
    {
      x: new Date(2016, 0, 1, 14, 15).toISOString(),
      y: 97.4,
    },
  ],
};

const DetailViewDivided = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfiguration);
    graph.loadContent(Carbon.api.line(dataset));
  }, []);

  return (
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
        graph={(
          <>
            {/* Sets the caption for the graph. The <figcaption> tag has to be the first element or the last element. */}
            <figcaption>Oral Temperature</figcaption>
            <div id="graph-id" />
          </>
        )}
        footer="Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"
      />
    </div>
  );
};

export default DetailViewDivided;
