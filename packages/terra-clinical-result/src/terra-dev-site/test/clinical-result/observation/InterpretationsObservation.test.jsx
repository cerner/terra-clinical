import React from 'react';
import Observation from '../../../../common/observation/_Observation';
import DefaultResult from '../TestResults';

const interpretations = [
  'critical',
  'critical-high',
  'critical-low',
  'positive',
  'abnormal',
  'high',
  'low',
  'normal',
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
