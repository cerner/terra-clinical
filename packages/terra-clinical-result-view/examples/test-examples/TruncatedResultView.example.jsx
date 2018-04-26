import React from 'react';
import Base from 'terra-base';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import ResultView from '../../src/ResultView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const results = [{ value: 503456789, unit: 'ml', normalcy: 'CRITICAL' }];

const TruncatedResultView = () => (
  <div>
    <h3>Complete Result View Truncated</h3>
    <Base id={1} locale={locale}>
      <ResultView
        results={results}
        timeDisplay="10 months"
        hasDocument
        hasComment
        isPadded
        isModified
      />
    </Base>
  </div>
);

export default TruncatedResultView;
