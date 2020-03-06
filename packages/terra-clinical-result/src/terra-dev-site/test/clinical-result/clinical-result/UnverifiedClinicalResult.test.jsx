import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';
import { UnverifiedResult } from '../TestResults';

export default () => (
  <>
    <div>
      <div>
        <ClinicalResult resultData={UnverifiedResult} />
      </div>
      <div>
        <ClinicalResult resultData={{
          ...UnverifiedResult,
          interpretation: 'ABNORMAL',
        }}
        />
      </div>
    </div>
  </>
);
