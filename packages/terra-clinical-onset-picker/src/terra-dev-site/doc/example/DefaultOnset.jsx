import React from 'react';
import moment from 'moment';
import OnsetPicker from 'terra-clinical-onset-picker';

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
