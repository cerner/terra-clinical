import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import ResultView from '../../src/ResultView';

const results = [{ value: 503456789, unit: 'ml', normalcy: 'CRITICAL' }];

const TruncatedResultView = () => (
  <div>
    <ResultView
      results={results}
      timeDisplay="10 months"
      hasDocument
      hasComment
      isPadded
      isModified
    />
  </div>
);

export default TruncatedResultView;
