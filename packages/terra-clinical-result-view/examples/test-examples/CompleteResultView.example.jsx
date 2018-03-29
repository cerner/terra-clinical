import React from 'react';
import Base from 'terra-base';
import ResultView from '../../src/ResultView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const results = [{ value: '503456789', unit: 'ml', normalcy: 'CRITICAL' }];

const CompleteResultView = () => (
  <Base locale={locale}>
    <ResultView
      results={results}
      timeDisplay="10 months"
      hasDocument
      hasComment
      isPadded
    />
  </Base>
);

export default CompleteResultView;
