import React from 'react';
import Base from 'terra-base';
import ResultView from '../../src/ResultView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const results = [{ value: 503456789, unit: 'ml', normalcy: 'HIGH' }];

const ResultViewNoTimeDisplay = () => (
  <div>
    <h3>Result View with No Time Display</h3>
    <Base id={1} locale={locale}>
      <ResultView
        results={results}
        hasDocument
        hasComment
        isPadded
      />
    </Base>
  </div>
);

export default ResultViewNoTimeDisplay;
