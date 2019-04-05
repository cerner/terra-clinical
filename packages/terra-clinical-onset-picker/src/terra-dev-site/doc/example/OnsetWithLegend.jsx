/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import OnsetPicker from 'terra-clinical-onset-picker/lib/OnsetPicker';

const picker = () => (
  <OnsetPicker
    birthdate={moment('2011-09-20').format('YYYY-MM-DD')}
    id="doogs"
    legend="Date of Birth"
  />
);

export default picker;
