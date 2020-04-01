import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';
import { DecoratedResult } from '../TestResults';

export default () => <ClinicalResult {...DecoratedResult} hideUnit />;
