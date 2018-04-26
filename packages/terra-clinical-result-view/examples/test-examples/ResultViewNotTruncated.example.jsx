import React from 'react';
import Base from 'terra-base';
import IconLow from 'terra-icon/lib/icon/IconLow';
import ResultView from '../../src/ResultView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const results = [{ value: 25.0, unit: 'ml', normalcy: 'LOW' }];

const ResultViewNotTruncated = () => (
  <div>
    <h3>Result View Not Truncated</h3>
    <Base id={1} locale={locale}>
      <ResultView
        results={results}
        timeDisplay="10 months"
        hasComment
        isPadded
        isTruncated={false}
      />
    </Base>
  </div>
);

export default ResultViewNotTruncated;
