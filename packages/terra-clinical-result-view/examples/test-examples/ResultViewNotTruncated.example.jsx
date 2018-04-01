import React from 'react';
import Base from 'terra-base';
import ResultView from '../../src/ResultView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const results = [{ value: '503456789', unit: 'ml', normalcy: 'CRITICAL' }];

const ResultViewNotTruncated = () => (
  <div>
    <h3>Result View Not Truncated</h3>
    <Base id={1} locale={locale}>
      <ResultView
        results={results}
        timeDisplay="10 months"
        hasDocument
        hasComment
        isPadded
        isTruncated={false}
      />
    </Base>
  </div>
);

export default ResultViewNotTruncated;
