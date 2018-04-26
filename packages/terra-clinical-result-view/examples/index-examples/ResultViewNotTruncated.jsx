import React from 'react';
import IconLow from 'terra-icon/lib/icon/IconLow';
import ResultView from '../../src/ResultView';

const results = [{ value: 25.2, unit: 'ml', normalcy: 'LOW' }];

const ResultViewNotTruncated = () => (
  <div>
    <ResultView
      results={results}
      timeDisplay="10 months"
      hasComment
      isPadded
      isTruncated={false}
    />
  </div>
);

export default ResultViewNotTruncated;
