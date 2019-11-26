import React from 'react';
import Observation from '../../../common/_Observation';
import { BadData } from './TestResults';

export default () => (
  <Observation
    eventId={BadData.eventId}
    clinicalresult={BadData.clinicalresult}
  />
);
