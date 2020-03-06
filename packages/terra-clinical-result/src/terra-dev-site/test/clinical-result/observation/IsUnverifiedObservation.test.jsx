import React from 'react';
import Observation from '../../../../common/observation/_Observation';
import DefaultResult from '../TestResults';

export default () => (
  <>
    <div>
      <div>
        <Observation
          eventId={DefaultResult.eventId}
          result={DefaultResult.result}
          isUnverified
        />
      </div>
      <div>
        <Observation
          eventId={DefaultResult.eventId}
          result={DefaultResult.result}
          interpretation="abnormal"
          isUnverified
        />
      </div>
    </div>
  </>
);
