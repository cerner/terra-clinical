import React from 'react';
import moment from 'moment';
import OnsetPicker from '../../../OnsetPicker';

export default () => {
  moment.now = () => new Date(2016, 8, 20);

  return (
    <div>
      <p>Onset picker with Hidden Legend </p>
      <OnsetPicker
        birthdate={moment('2011-09-20').format('YYYY-MM-DD')}
        id="test"
        legend="Date of Birth"
        isLegendHidden
      />
    </div>
  );
};
