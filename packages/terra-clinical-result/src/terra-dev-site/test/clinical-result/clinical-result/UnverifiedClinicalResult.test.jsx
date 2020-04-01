import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';
import { UnverifiedResult } from '../TestResults';

export default () => (
  <>
    <div>
      <div>
        <ClinicalResult {...UnverifiedResult} />
      </div>
      <div>
        <ClinicalResult
          {...UnverifiedResult}
          interpretation="abnormal"
        />
      </div>
    </div>
  </>
);
