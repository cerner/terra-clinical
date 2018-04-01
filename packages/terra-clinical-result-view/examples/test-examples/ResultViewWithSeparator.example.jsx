import React from 'react';
import Base from 'terra-base';
import ResultView from '../../src/ResultView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const resultsWithSeperator = [{ value: '120', unit: 'mmHg' }, { value: '80', unit: 'mmHg' }];

const ResultViewWithSeparator = () => (
  <div>

    <h3>Result View with separator</h3>
    <Base id={5} locale={locale}>
      <ResultView
        results={resultsWithSeperator}
        isTruncated={false}
      />
    </Base>
  </div>
);

export default ResultViewWithSeparator;
