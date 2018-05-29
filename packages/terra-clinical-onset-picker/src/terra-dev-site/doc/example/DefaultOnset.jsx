/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import OnsetPicker from 'terra-clinical-onset-picker/lib/OnsetPicker';

const picker = () => (
  <OnsetPicker
    birthdate={moment().subtract(6, 'years').format()}
    granularitySelectName="doogs-granularity"
    precisionSelectName="doogs-precision"
    onsetDateInputName="doogs-onsetDate"
  />
);

export default picker;
