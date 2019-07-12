/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import OnsetPicker from 'terra-clinical-onset-picker/lib/OnsetPicker';

const birthdate = moment().subtract(6, 'years');
const picker = () => (
  <div>
    <p>{`Birthdate: ${birthdate.format('MM-DD-YYYY')}`}</p>
    <OnsetPicker
      legend="Onset of symptoms"
      birthdate={birthdate.format('YYYY-MM-DD')}
      id="doogs"
    />
  </div>
);

export default picker;
