import React from 'react';
import { ResultNameHeaderCell } from 'terra-clinical-result/lib';

const ResultTimeHeaderCellExample = () => (
  <>
    <ResultNameHeaderCell resultName="Name" unit="Unit" typeIndicator="none" />
    <ResultNameHeaderCell resultName="Name" unit="Unit" typeIndicator="calculated" />
  </>
);

export default ResultTimeHeaderCellExample;
