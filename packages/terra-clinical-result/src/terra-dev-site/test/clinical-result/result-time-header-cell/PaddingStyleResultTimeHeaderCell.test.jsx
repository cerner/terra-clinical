import React from 'react';
import { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';

const ResultTimeHeaderCellExample = () => (
  <>
    <ResultTimeHeaderCell date="Dec 21, 2010" time="23:59" paddingStyle="none" />
    <ResultTimeHeaderCell date="Dec 21, 2010" time="23:59" paddingStyle="standard" />
    <ResultTimeHeaderCell date="Dec 21, 2010" time="23:59" paddingStyle="compact" />
  </>
);

export default ResultTimeHeaderCellExample;
