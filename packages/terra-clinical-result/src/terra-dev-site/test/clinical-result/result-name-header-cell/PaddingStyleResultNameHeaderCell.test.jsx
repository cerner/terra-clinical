import React from 'react';
import { ResultNameHeaderCell } from 'terra-clinical-result/lib/index';

const ResultTimeHeaderCellExample = () => (
  <>
    <ResultNameHeaderCell resultName="Name" unit="Unit" paddingStyle="none" />
    <ResultNameHeaderCell resultName="Name" unit="Unit" paddingStyle="standard" />
    <ResultNameHeaderCell resultName="Name" unit="Unit" paddingStyle="compact" />
  </>
);

export default ResultTimeHeaderCellExample;
