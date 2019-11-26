import React from 'react';
import Observation from '../../../common/_Observation';
import DefaultResult from './TestResults';

export default () => (
  <Observation
    eventId={DefaultResult.eventId}
    result={DefaultResult.result}
  />
);
