import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';
import { UnverifiedResult } from '../TestResults';

export default () => <ClinicalResult resultData={UnverifiedResult} />;
