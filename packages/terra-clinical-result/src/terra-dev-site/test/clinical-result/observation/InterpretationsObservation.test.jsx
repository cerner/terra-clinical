import React from 'react';
import Observation from '../../../../common/observation/_Observation';
import DefaultResult from '../TestResults';

const interpretations = [
  'CRITICAL',
  'EXTREMEHIGH',
  'EXTREMELOW',
  'POSITIVE',
  'ABNORMAL',
  'HIGH',
  'LOW',
  'NORMAL',
];

const interpretationDivs = interpretations.map((interpretation => (
  <div key={interpretation}>
    <Observation
      eventId={DefaultResult.eventId}
      result={DefaultResult.result}
      interpretation={interpretation}
    />
  </div>
)));

export default () => (
  <>
    {interpretationDivs}
  </>
);
