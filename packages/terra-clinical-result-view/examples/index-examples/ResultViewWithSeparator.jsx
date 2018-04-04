import React from 'react';
import ResultView from '../../src/ResultView';

const resultsWithSeperator = [{ value: 120, unit: 'mmHg' }, { value: 80, unit: 'mmHg' }];

const ResultViewWithSeparator = () => (
  <div>
    <ResultView
      results={resultsWithSeperator}
      isTruncated={false}
    />
  </div>
);

export default ResultViewWithSeparator;
