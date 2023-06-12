import React from 'react';
import classNames from 'classnames/bind';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';
import DetailView from '../../../../DetailView';
import '@cerner/carbon-graphs/dist/css/carbon-graphs.css';
import styles from './DetailViewCommon.test.module.scss';

const cx = classNames.bind(styles);

const accessoryElement = (<p> A sample accessory container </p>);

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

const DetailViewGraphContent = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfiguration);
    graph.loadContent(Carbon.api.line(dataset));
  }, []);

  return (
    <DetailView
      title="Detail View with Graph Content"
      level={3}
      secondaryTitles={['secondaryTitle1', 'secondaryTitle2']}
      subtitles={['subtitle1', 'subTitle2']}
      graph={(
        <>
          {/* Sets the caption for the graph. The `<figcaption>` tag has to be the first element or the last element of `<figure>` element.
            Inside `DetailView` component, the `<figure>` tag wraps the graph prop like this `<figure>{graph}</figure>`.
          */}
          <figcaption className={cx('caption-text')}>Oral Temperature Graph - Degrees Fahrenheit (Y axis) vs Time (X axis)</figcaption>

          {/* This div with the ID attribute is used by the graph config in `graphConfiguration` as well as
            the APIs in `React.useEffect` above to insert in the graph content at run time.
          */}
          <div id="graph-id" className={cx('graph-content')} />
        </>
      )}
      accessory={accessoryElement}
      footer="Footer Text"
      id="DetailView"
      isSmallerTitles={false}
    />
  );
};

export default DetailViewGraphContent;
