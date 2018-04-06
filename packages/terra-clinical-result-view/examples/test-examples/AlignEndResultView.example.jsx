import React from 'react';
import Base from 'terra-base';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import ResultView from '../../src/ResultView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const results = [{ value: 503456789, unit: 'ml', icon: <IconAlert />, color: '#E50000' }];

const AlignEndResultView = () => (
  <div>
    <h3>Result View Align End</h3>
    <Base id={1} locale={locale}>
      <ResultView
        results={results}
        timeDisplay="10 months"
        hasDocument
        hasComment
        isPadded
        alignment="right"
      />
    </Base>
  </div>
);

export default AlignEndResultView;
