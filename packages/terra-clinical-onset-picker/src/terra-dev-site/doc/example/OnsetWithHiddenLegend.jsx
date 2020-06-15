import React from 'react';
import moment from 'moment';
import OnsetPicker from 'terra-clinical-onset-picker';

const OnsetWithHiddenLegend = () => (
  <OnsetPicker
    birthdate={moment().subtract(6, 'years').format('YYYY-MM-DD')}
    id="onsetlegend"
    legend="Date of Onset"
    isLegendHidden
  />
);

export default OnsetWithHiddenLegend;
